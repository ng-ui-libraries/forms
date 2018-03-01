import {
    ViewEncapsulation, Component, Input, EventEmitter, Output, ViewChild, OnInit, OnDestroy,
    Inject, Injector, KeyValueDiffer, KeyValueDiffers
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
            <div class="form-group" [class.validate-input]="shouldValidate" [class.no-validate-input]="!shouldValidate" [class.checked]="value">
                <label *ngIf="labelPlacement === 'above'" for="{{identifier}}">
                    {{ label }}
                    <span *ngIf="required">*</span>
                </label>
                <div></div>
                <div (click)="nextState()" (keyup.enter)="nextState()" (keyup.space)="nextState()" class="input-group check-container ng-control"
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
                                   [(ngModel)]="value"
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
                <validation-messages *ngIf="(isInvalid$() | async)" [errors]="failures" [label]="label">
                </validation-messages>
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

    @OnChange @Input() state = 'off';

    @Input() name: string                = '';
    @Input() label: string               = '';
    @Input() labelPlacement: string      = 'above';
    @Input() checkedValue: any           = true;
    @Input() disabled: boolean           = false;
    @Input() shouldValidate: boolean     = true;
    @OnChange @Input() required: boolean = false;
    @Input() parentFormControl: FormControl;
    @Input() parentFormGroup: FormGroup;
    @OnChange @Input() threeState        = false;

    @Output() threeStateChange = new EventEmitter<boolean>();
              requiredChange   = new EventEmitter<boolean>();
    @Output() stateChange      = new EventEmitter<string>();

    identifier = `check-box-${identifier++}`;

    @ViewChild('checkbox') checkbox;
    @ViewChild('element') element;

    @Output() onInit = new EventEmitter<any>();

    requiredValidator: RequiredValidator = new RequiredCheckBoxValidator();

    constructor(@Inject(Injector) public injector: Injector) {
        super(injector);
        this.additionalValidators = [this.requiredValidator];
    }

    ngOnInit() {
        super.ngOnInit();
        this.onInit.emit();
        this.requiredValidator.required = this.required;
        this.requiredChange.merge(this.stateChange).merge(this.threeStateChange).takeUntil(this.onDestroy$).subscribe(() => {
            this.requiredValidator.required = this.required;
            this.updateState();
            this.value = this.state === 'on' ? this.checkedValue : false;
        });
        this.updateState();
        Observable.interval(1000)
            .map(() => this.value)
            .distinctUntilChanged()
            .takeUntil(this.onDestroy$)
            .subscribe(() => this.updateState());
    }

    nextState() {
        if (!this.disabled) {
            this.control.markAsTouched();
            if (this.threeState && this.state === 'on') {
                this.state = 'indeterminate';
                return;
            }
            this.state = this.state === 'off' ? 'on' : 'off';
        }
    }

    updateState() {
        setTimeout(() => {
            this.correctState();
            if (this.checkbox && this.checkbox.nativeElement) {
                this.checkbox.nativeElement.indeterminate = this.state === 'indeterminate';
            }
            this.value = this.state === 'on' ? this.checkedValue : false;
        });
    }

    correctState() {
        if (this.value && this.state === 'off') {
            this.state = 'on';
        }
        if ((this.state === 'on' && !this.value) || (this.state === 'indeterminate' && !this.threeState)) {
            this.state = 'off';
        }
    }
}

let identifier = 0;
