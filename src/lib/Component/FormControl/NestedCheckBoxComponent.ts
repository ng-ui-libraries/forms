import {
    ViewEncapsulation, Component, Input, EventEmitter, OnDestroy, OnInit, ViewChild,
    Injector, KeyValueDiffers, KeyValueDiffer, DoCheck
}                                                                   from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NestedSearcher}                                             from '../../Service/Impl/NestedSearcher';
import {Async, OnChange, Value}                                     from '@ng-app-framework/core';
import {Observable}                                                 from 'rxjs/Rx';
import {NgFormControl}                                              from '../NgFormControl';

@Component({
    selector     : 'nested-check-box',
    template     : `
        <ng-container *ngIf="initialized">
            <div class="form-group" [class.validate-input]="shouldValidate" [class.no-validate-input]="!shouldValidate">
                <label>
                    {{label}}
                </label>
                <div></div>
                <ng-container>
                    <nested-list
                            class="form-control-container"
                            [ngClass]="{'ng-invalid':(isInvalid$() | async), 'ng-touched':(touched$ | async), 'ng-valid':!(isInvalid$() | async)}"
                            [item]="nestedList"
                            [containerClass]="'form-control expandable ng-control'"
                            [showLines]="false"
                            [onCollapseAll]="onCollapseAll"
                            [onExpandAll]="onExpandAll"
                            [searchBy]="searchBy"
                            [collapsed]="true"
                    >
                        <ng-template let-item>
                            <div class="three-state" [class.active]="selection[item[selectBy]]">
                                <span>{{item.name}}</span>
                                <button class="btn btn-sm btn-outline-primary" type="button" (click)="click(item)">
                                <span class="fa" [class.fa-square-o]="!selection[item[selectBy]] && !indeterminate[item[selectBy]]"
                                      [class.fa-check-square-o]="selection[item[selectBy]]"
                                      [class.fa-minus-square-o]="indeterminate[item[selectBy]]"></span>
                                </button>
                            </div>
                        </ng-template>
                    </nested-list>
                </ng-container>
                <validation-messages *ngIf="(isInvalid$() | async)" [errors]="failures" [label]="label">
                </validation-messages>
            </div>
        </ng-container>
    `,
    styleUrls    : ['./assets/nested-select.scss'],
    providers    : [{
        provide    : NG_VALUE_ACCESSOR,
        useExisting: NestedCheckBoxComponent,
        multi      : true
    }],
    encapsulation: ViewEncapsulation.None
})
export class NestedCheckBoxComponent extends NgFormControl<any[]> implements OnInit, OnDestroy {


    @Input() name: string                = null;
    @OnChange @Input() required: boolean = false;
    @OnChange @Input() disabled: boolean = false;
    @Input() parentFormControl: FormControl;
    @Input() parentFormGroup: FormGroup;
    @Input() label: string               = '';
    @Input() placeholder: string         = null;
    @Input() shouldValidate              = true;

    @Input() labelPlacement = 'before';

    onCollapseAll = new EventEmitter<any>();
    onExpandAll   = new EventEmitter<any>();

    @Input() options: any[] = [];

    @Input() selectBy: string   = 'id';
    @Input() searchBy: string[] = ['name'];

    protected selection: { [key: string]: any }     = {};
    protected indeterminate: { [key: string]: any } = {};
    protected searcher: NestedSearcher;

    additionalValidators = [{
        validate: (control: AbstractControl) => {
            if (this.required && (!control.value || control.value.length === 0)) {
                return {required: true};
            }
            return null;
        }
    }];

    nestedList = {children: []};

    constructor(
        public injector: Injector
    ) {
        super(injector);
    }

    ngOnInit() {
        super.ngOnInit();
        this.nestedList.children = this.options;
        this.searcher            = new NestedSearcher(this.searchBy);
    }

    shouldBold$(item) {
        return Observable.of(this.searcher.isTermLongEnough() && this.searcher.doesItemMatchSearch(item)).debounceTime(500);
    }

    hasChildren(item) {
        return Value.hasArrayElements(item.children);
    }

    click(item) {
        this.selection[item[this.selectBy]] = this.selection[item[this.selectBy]] || this.indeterminate[item[this.selectBy]] ? null : item[this.selectBy];
        this.updateSelected();
        this.updateThreeState(item);
        this.updateChildren$(item)
            .toArray().subscribe({
            next    : (arr) => {
                if (arr.length === 0) {
                    this.indeterminate[item[this.selectBy]] = null;
                }
            },
            complete: () => {
                this.updateParents(item);
                this.updateSelected();
                this.control.markAsTouched();
            }
        });
    }

    updateSelected() {
        this.value = Object.keys(this.selection).map((key) => this.selection[key]).filter((value) => Boolean(value));
    }

    private updateParents(item) {
        if (item.$parent) {
            if (this.indeterminate[item.$parent[this.selectBy]] && !this.indeterminate[item[this.selectBy]] && !this.selection[item[this.selectBy]]) {
                this.indeterminate[item.$parent[this.selectBy]] = null;
                this.updateParents(item.$parent);
            }
        }
    }

    private updateThreeState(item) {
        if (!this.selection[item[this.selectBy]] && !this.indeterminate[item[this.selectBy]] && item.children && item.children.length > 0) {
            this.indeterminate[item[this.selectBy]] = item[this.selectBy];
            return;
        }
        this.indeterminate[item[this.selectBy]] = null;
    }

    updateChildren$(item) {
        return Observable.from(item.children || [])
                         .filter((child: any) => {
                             return child.$shown;
                         })
                         .do((child: any) => {
                             if (this.selection[item[this.selectBy]]) {
                                 this.selection[child[this.selectBy]]     = child[this.selectBy];
                                 this.indeterminate[child[this.selectBy]] = null;
                                 return;
                             }
                             if (!this.indeterminate[item[this.selectBy]]) {
                                 this.selection[child[this.selectBy]]     = null;
                                 this.indeterminate[child[this.selectBy]] = null;
                             }
                         })
                         .flatMap((child: any) => {
                             if (child.children && child.children.length > 0) {
                                 if (this.selection[child[this.selectBy]]) {
                                     return Observable.from([child]).concat(this.updateChildren$(child));
                                 }
                                 return this.updateChildren$(child);
                             }
                             if (this.selection[child[this.selectBy]]) {
                                 return Observable.from([child]);
                             }
                             return Observable.from([]);
                         });
    }
}
