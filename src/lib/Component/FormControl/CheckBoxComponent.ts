import {
    ViewEncapsulation, Component, Input, EventEmitter, Output, ViewChild, OnInit, OnDestroy,
    Inject, Injector
}                                  from '@angular/core';
import {
    FormControl,
    FormGroup,
    NG_VALUE_ACCESSOR, RequiredValidator
}                                  from '@angular/forms';
import {OnChange}                  from '@ng-app-framework/core';
import {Observable}                from 'rxjs/Rx';
import {NgFormControl}             from '../NgFormControl';
import {RequiredCheckBoxValidator} from '../../Validation/Directive/RequiredCheckBoxValidator';


@Component({
    selector     : 'check-box',
    template     : `
        <ng-container *ngIf="initialized">
            <div class="form-group" [class.validate-input]="shouldValidate" [class.no-validate-input]="!shouldValidate">
                <validation-messages *ngIf="(isInvalid$() | async)" [errors]="failures$ | async" [label]="label">
                </validation-messages>
                <label *ngIf="labelPlacement === 'above'" for="{{identifier}}">
                    {{ label }}
                    <span *ngIf="required">*</span>
                </label>
                <div></div>
                <div (click)="updateState();markAsTouched();" class="input-group check-container ng-control"
                     tabindex="0"
                     #element
                     [ngClass]="{'ng-invalid': isInvalid$() | async, 'ng-touched':(touched$ | async), 'ng-valid':!(isInvalid$() | async) && (touched$ | async)}">
                    <div class="form-control" *ngIf="labelPlacement === 'before'">
                        <label>
                            {{ label }}
                            <span *ngIf="required">*</span>
                        </label>
                    </div>
                    <div [class.input-group-prepend]="labelPlacement === 'before'" [class.input-group-append]="labelPlacement === 'after'">
                        <div class="input-group-text">
                            <input readonly #checkbox type="checkbox"
                                   [id]="identifier"
                                   [disabled]="disabled"
                                   [attr.checked]="checked || null"
                                   [value]="checkedValue"
                                   tabindex="-1"/>
                        </div>
                    </div>
                    <div class="form-control" *ngIf="labelPlacement === 'after'">
                        <label>
                            {{ label }}
                            <span *ngIf="required">*</span>
                        </label>
                    </div>
                </div>
            </div>
        </ng-container>
    `,
    styleUrls    : ['./assets/check-box.scss'],
    providers    : [
        {
            provide    : NG_VALUE_ACCESSOR,
            useExisting: CheckBoxComponent,
            multi      : true
        }
    ],
    encapsulation: ViewEncapsulation.None
})
export class CheckBoxComponent extends NgFormControl<any> implements OnInit, OnDestroy {

    @OnChange checked: boolean = false;
    @OnChange @Input() state   = 'off';

    @Input() name: string                = '';
    @Input() label: string               = '';
    @Input() labelPlacement: string      = 'above';
    @Input() checkedValue: any           = true;
    @Input() disabled: boolean           = false;
    @Input() shouldValidate: boolean     = true;
    @OnChange @Input() required: boolean = false;
    @Input() parentFormControl: FormControl;
    @Input() parentFormGroup: FormGroup;

    requiredChange          = new EventEmitter<boolean>();
    @Output() checkedChange = new EventEmitter<boolean>();
    @Output() stateChange   = new EventEmitter<string>();

    identifier = `check-box-${identifier++}`;

    @ViewChild('checkbox') checkbox;
    @ViewChild('element') element;

    @Input() threeState = false;

    @Output() onInit = new EventEmitter<any>();

    requiredValidator: RequiredValidator = new RequiredCheckBoxValidator();

    constructor(@Inject(Injector) public injector: Injector) {
        super(injector);
        this.additionalValidators = [this.requiredValidator];
    }

    ngOnInit() {
        super.ngOnInit();
        this.onInit.emit();
        this.updateCheckedStatus();
        this.watchChanges();
    }

    watchChanges() {
        this.requiredChange.merge(this.stateChange).takeUntil(this.onDestroy$).subscribe(() => {
            this.updateCheckedStatus();
        });
    }

    onLoad() {

        Observable.fromEvent(this.element.nativeElement, 'keypress')
                  .takeUntil(this.onDestroy$)
                  .subscribe((event: KeyboardEvent) => {
                      if (event.key === ' ') {
                          this.updateState();
                          this.markAsTouched();
                      }
                  });
    }

    updateCheckedStatus() {
        this.requiredValidator.required = this.required;
        this.checked                    = this.state === 'on';
        this.value                      = this.checked ? this.checkedValue : false;
        if (this.checkbox && this.checkbox.nativeElement) {
            this.checkbox.nativeElement.indeterminate = this.state === 'indeterminate';
        }
    }

    markAsTouched() {
        this.model.control.markAsTouched();
    }

    updateState() {
        if (!this.disabled && !this.setIndeterminateIfNecessary()) {
            this.toggle();
        }
    }

    setIndeterminateIfNecessary() {
        if (this.threeState && this.state === 'on') {
            this.state = 'indeterminate';
            return true;
        }
        return false;
    }

    toggle() {
        this.state = this.state === 'off' ? 'on' : 'off';
    }
}

let identifier = 0;
