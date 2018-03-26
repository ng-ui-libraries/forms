import {
    ViewEncapsulation, Component, Input, EventEmitter, OnDestroy, OnInit, ViewChild,
    Injector, KeyValueDiffers, KeyValueDiffer, DoCheck, Output
}                                                                   from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DragAndDrop}                                                from '../../Service/Impl/DragAndDrop';
import {NestedSearcher}                                             from '../../Service/Impl/NestedSearcher';
import {Async, OnChange, Value}                                     from '@ng-app-framework/core';
import {Observable}                                                 from 'rxjs/Rx';
import {NgFormControl}                                              from '../NgFormControl';

@Component({
    selector     : 'nested-field',
    template     : `
        <ng-container *ngIf="initialized">
            <div class="form-group" [class.validate-input]="shouldValidate" [class.no-validate-input]="!shouldValidate">
                <label>
                    {{label}}
                </label>
                <div></div>
                <ng-container>
                    <nested-list
                            class="form-control-container full-width"
                            [ngClass]="{'ng-invalid':(isInvalid$() | async), 'ng-touched':(touched$ | async), 'ng-valid':!(isInvalid$() | async)}"
                            [item]="value"
                            [searchBy]="searchBy"
                            [searcher]="searcher"
                            [collapsed]="true"
                            (mousemove)="getMouseLocation($event)"
                    >
                        <ng-template let-item>
                            <div class="input-group" [class.dragging]="dragAndDrop.source === item">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        {{item.id || '-' }}
                                    </span>
                                </div>
                                <div class="form-control" *ngIf="!item.$focused" tabindex="0"
                                     (click)="item.$focused = true;dragAndDrop.abort()"
                                     (mousedown)="dragAndDrop.drag(item)" (mouseup)="dragAndDrop.drop(item)">
                                    {{ item.name }}
                                </div>
                                <text-box #textBox [autofocus]="true" *ngIf="item.$focused" [(ngModel)]="item.name" [required]="true"
                                          name="" class="hide-until-focused full-width"
                                          [disableLastPass]="true" [showErrors]="false" (inputFocusOut)="item.$focused = false">
                                </text-box>
                                <div class="input-group-append">
                                    <button class="btn btn-success btn-sm" tabindex="0" (activate)="addUnitToParent(item)">
                                        <span class="fa fa-plus"></span>
                                    </button>
                                    <button class="btn btn-danger btn-sm" tabindex="0" (activate)="removeUnitFromParent(item)">
                                        <span class="fa fa-times"></span>
                                    </button>
                                </div>
                            </div>
                        </ng-template>
                    </nested-list>
                </ng-container>
                <div class="dragging-element" *ngIf="dragAndDrop.source && dragAndDrop.isDragging && !dragAndDrop.source.$focused"
                     [attr.style]="getDragPosition() | safe: 'style'">
                    {{dragAndDrop.source.name}}
                </div>
            </div>
        </ng-container>
    `,
    styleUrls    : ['./assets/nested-field.scss'],
    providers    : [{
        provide    : NG_VALUE_ACCESSOR,
        useExisting: NestedFieldComponent,
        multi      : true
    }],
    encapsulation: ViewEncapsulation.None
})
export class NestedFieldComponent extends NgFormControl<any> implements OnInit, OnDestroy {


    @Input() name: string                = null;
    @OnChange @Input() required: boolean = false;
    @OnChange @Input() disabled: boolean = false;
    @Input() parentFormControl: FormControl;
    @Input() parentFormGroup: FormGroup;
    @Input() label: string               = '';
    @Input() placeholder: string         = null;
    @Input() shouldValidate              = true;

    @Input() labelPlacement = 'before';

    @Input() selectBy: string   = 'id';
    @Input() searchBy: string[] = ['name'];

    dragAndDrop = new DragAndDrop();

    protected searcher: NestedSearcher;

    mousePosition = {
        x: 0,
        y: 0
    };

    constructor(
        public injector: Injector
    ) {
        super(injector);
    }

    ngOnInit() {
        super.ngOnInit();
        this.searcher = new NestedSearcher(this.searchBy);
        this.onLoad();

        this.dragAndDrop.onDrop.subscribe(({source, destination}) => {
            let parent = this.searcher.getParent(source);
            if (parent && !this.isSourceParentOfDestination(source, destination)) {
                this.removeFromParent(source, parent);
                this.addToParent(source, destination);
                this.searcher.updateMatches(this.value);
            }
        });
    }

    onLoad() {
        if (this.value === null) {
            setTimeout(() => this.onLoad(), 500);
            return;
        }
        this.searcher.updateMatches(this.value);
    }

    addUnitToParent(parent) {
        this.addToParent({
            id  : null,
            name: ''
        }, parent);
    }

    removeUnitFromParent(unit) {
        this.removeFromParent(unit, this.searcher.getParent(unit));
    }

    addToParent(unit, parent) {
        if (!parent.hasOwnProperty('children')) {
            parent.children = [];
        }
        parent.children.push(unit);
        this.searcher.initializeMetadata(unit, parent);
        parent.$collapsed = false;
    }

    removeFromParent(unit, parent) {
        if (parent) {
            parent.children.splice(parent.children.indexOf(unit), 1);
        }
    }

    getMouseLocation($event: MouseEvent) {
        this.mousePosition.x = $event.clientX;
        this.mousePosition.y = $event.clientY;
        this.dragAndDrop.moveMouse();
    }

    getDragPosition() {
        return `left:${this.mousePosition.x}px;top:${this.mousePosition.y}px`;
    }

    isSourceParentOfDestination(source: any, destination: any) {

        if (source.children && source.children.length > 0) {
            for (let child of source.children) {
                if (child === destination) {
                    return true;
                }
                if (child.children && child.children.length > 0 && this.isSourceParentOfDestination(child, destination)) {
                    return true;
                }
            }
        }
        return false;
    }
}
