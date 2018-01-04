import {Component, Input, ViewChild, ViewEncapsulation, Injector}               from '@angular/core';
import {AbstractControl, FormControl, NG_VALUE_ACCESSOR, Validators, FormGroup} from '@angular/forms';
import {OnChange}                                                               from '@ng-app-framework/core';
import {Observable}                                                             from 'rxjs/Rx';
import {NgFormControl}                                                          from '../NgFormControl';
import {TextBoxComponent}                                                       from './TextBoxComponent';

@Component({
    selector     : 'email',
    template     : `
        <ng-container *ngIf="initialized">
            <div class="form-group" [class.validate-input]="shouldValidate" [class.no-validate-input]="!shouldValidate"
                 [hidden]="!initialized">
                <validation-messages *ngIf="(isInvalid$() | async)" [errors]="failures$ | async" [label]="label">
                </validation-messages>
                <label [attr.for]="identifier" *ngIf="label.length > 0">
                    {{label}}
                    <ng-container *ngIf="required">*</ng-container>
                </label>
                <div></div>
                <div class="input-group ng-control"
                     [ngClass]="{'ng-invalid':(isInvalid$() | async), 'ng-touched':(touched$ | async), 'ng-valid':!(isInvalid$() | async)}">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <span class="fa fa-envelope"></span>
                        </div>
                    </div>
                    <input class="form-control"
                           [type]="type"
                           [placeholder]="placeholder || ''"
                           [id]="identifier"
                           [attr.autofocus]="autofocus || null"
                           [attr.autocapitalize]="autocapitalize"
                           [attr.autocorrect]="autocorrect"
                           [attr.spellcheck]="spellcheck"
                           [name]="name"
                           [(ngModel)]="value"
                           (blur)="triggerValidation()"
                    />
                </div>
            </div>
        </ng-container>
    `,
    styleUrls    : ['./assets/field.scss'],
    providers    : [{
        provide    : NG_VALUE_ACCESSOR,
        useExisting: EmailComponent,
        multi      : true
    }],
    encapsulation: ViewEncapsulation.None
})
export class EmailComponent extends NgFormControl<string> {

    @Input() name: string                = null;
    @OnChange @Input() required: boolean = false;
    @OnChange @Input() disabled: boolean = false;
    @Input() parentFormControl: FormControl;
    @Input() parentFormGroup: FormGroup;
    @Input() label: string               = '';
    @Input() placeholder: string         = null;
    @Input() shouldValidate              = true;
    @Input() type: string                = 'text';
    @Input() autofocus                   = null;
    @Input() autocorrect                 = true;
    @Input() autocapitalize              = true;
    @Input() spellcheck                  = true;

    shouldValidateEmail: boolean = false;

    @ViewChild('textBox') textBox: TextBoxComponent;

    additionalValidators = [
        {
            validate: control => {
                return this.shouldValidateEmail ? Validators.email(control) : null;
            }
        }
    ];

    constructor(public injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        super.ngOnInit();
        this.shouldValidateEmail = !!(this.value && this.value.length > 0);
        this.valueChange.takeUntil(this.onDestroy$)
            .subscribe(value => {
                this.shouldValidateEmail = value && value.length > 0;
            });
    }
}
