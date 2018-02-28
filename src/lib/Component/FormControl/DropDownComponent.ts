import {
    ViewEncapsulation, Component, Input, EventEmitter, OnInit, OnDestroy, Injector,
    Inject, ViewChild, ContentChild, TemplateRef
}                                                  from '@angular/core';
import {FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Value}                                     from '@ng-app-framework/core';
import {NgFormControl}                             from '../NgFormControl';

@Component({
    selector     : 'drop-down',
    template     : `
        <ng-container *ngIf="initialized">
            <ng-template #defaultOption let-item>
                {{ item[labelField] }}
            </ng-template>
            <div class="form-group" [class.validate-input]="shouldValidate" [class.no-validate-input]="!shouldValidate">
                <label [attr.for]="identifier">
                    {{ label }}
                    <ng-container *ngIf="required">*</ng-container>
                </label>
                <div></div>
                <div class="input-group ng-control" [class.disabled]="disabled"
                     [ngClass]="{'ng-invalid':(isInvalid$() | async), 'ng-touched':(touched$ | async), 'ng-valid':!(isInvalid$() | async) && (touched$ | async)}">
                    <div class="input-group-prepend" *ngIf="isIconProvided() && isIconPlacementBefore()">
                        <div class="input-group-text">
                            <span class="fa fa-{{icon}}"></span>
                        </div>
                    </div>
                    <input class="form-control" readonly disabled *ngIf="disabled" [ngModel]="getReadOnlyValue()" [name]="name"/>
                    <ng-select
                            *ngIf="!disabled"
                            [items]="options"
                            [typeahead]="typeahead || null"
                            [bindValue]="selectBy"
                            [bindLabel]="labelField"
                            [multiple]="isMultiple"
                            [placeholder]="placeholder"
                            
                            [(ngModel)]="value"
                            (blur)="triggerValidation()"
                            (change)="triggerValidation()"
                    >
                        <ng-template ng-option-tmp let-item="item">
                            <ng-container
                                    *ngTemplateOutlet="template ? template : defaultOption;context:{$implicit: item}"></ng-container>
                        </ng-template>
                    </ng-select>
                    <div class="input-group-append" *ngIf="isIconProvided() && !isIconPlacementBefore()">
                        <div class="input-group-text">
                            <span class="fa fa-{{icon}}"></span>
                        </div>
                    </div>
                </div>
                <validation-messages *ngIf="(isInvalid$() | async)" [errors]="failures" [label]="label">
                </validation-messages>
            </div>
            <ng-container *ngIf="!areOptionsProvided()">
                <div class="alert alert-notice">
                    There are no options available.
                </div>
            </ng-container>
        </ng-container>
    `,
    styleUrls    : ['./assets/ng2-select.scss'],
    providers    : [
        {
            provide    : NG_VALUE_ACCESSOR,
            useExisting: DropDownComponent,
            multi      : true
        }
    ],
    encapsulation: ViewEncapsulation.None
})
export class DropDownComponent extends NgFormControl<any> implements OnInit, OnDestroy {

    @Input() @ContentChild(TemplateRef) template;

    private _isMultiple = false;

    @Input()
    public get isMultiple(): boolean {
        return this._isMultiple;
    }

    public set isMultiple(value: boolean) {
        this._isMultiple = value;
        if (this.initialized) {
            setTimeout(() => {
                this.onMultipleChange();
            });
        }
    }

    @Input() name: string                                    = '';
    @Input() label: string                                   = '';
    @Input() required: boolean                               = false;
    @Input() disabled: boolean                               = false;
    @Input() placeholder                                     = 'Select ...';
    @Input() options: { text: string, [key: string]: any }[] = [];
    @Input() selectBy: string                                = 'id';
    @Input() labelField: string                              = 'text';
    @Input() parentFormControl: FormControl;
    @Input() parentFormGroup: FormGroup;

    @Input() typeahead: EventEmitter<string> = new EventEmitter<string>();


    @Input() icon: string          = '';
    @Input() iconPlacement: string = 'before';


    identifier = `option-list-${identifier++}`;


    constructor(@Inject(Injector) public injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy() {
        this.onDestroy$.emit();
    }

    onMultipleChange() {
        if (this.isMultiple) {
            if (!Array.isArray(this.value)) {
                this.value = [this.value];
            }
            return;
        }
        if (Array.isArray(this.value)) {
            this.value = this.value[0] || null;
        }
    }

    areOptionsProvided() {
        return Value.hasArrayElements(this.options);
    }


    isIconProvided() {
        return this.icon.length > 0;
    }

    isIconPlacementBefore() {
        return this.iconPlacement === 'before';
    }

    getReadOnlyValue() {
        let textValues = this.options.filter((value) => value[this.selectBy] === this.value);
        return textValues.length > 0 ? textValues[0][this.labelField] : '';
    }
}

let identifier = 0;
