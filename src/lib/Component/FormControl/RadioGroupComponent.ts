import {
    ViewEncapsulation, Component, Input, EventEmitter, ViewChild, OnInit, OnDestroy,
    Inject, Injector
}                      from '@angular/core';
import {
    FormControl,
    FormGroup,
    NG_VALUE_ACCESSOR, RequiredValidator
}                      from '@angular/forms';
import {OnChange}      from '@ng-app-framework/core';
import {FormConfig}    from '../../Service/FormConfig';
import {NgFormControl} from '../NgFormControl';


@Component({
    selector     : 'radio-group',
    template     : `
        <div class="form-group">
            <label>
                {{ label }}
                <span *ngIf="required && config.showRequiredAsterisk">*</span>
            </label>
            <div></div>
            <div class="radio-controls" [class.d-flex]="direction === 'horizontal'">
                <ng-container *ngFor="let option of options">
                    <radio [name]="name"
                           [label]="option[bindLabel]"
                           [(ngModel)]="value"
                           [checkedValue]="option[bindValue]"
                           [parentFormControl]="control"
                           (ngModelChange)="triggerValidation()"
                           (onTouch)="control.markAsTouched()"
                           tabindex="0"></radio>
                </ng-container>
            </div>
            <validation-messages *ngIf="(isInvalid$() | async)" [errors]="failures" [label]="label">
            </validation-messages>
        </div>
    `,
    styleUrls    : ['./assets/check-box.scss'],
    providers    : [
        {
            provide    : NG_VALUE_ACCESSOR,
            useExisting: RadioGroupComponent,
            multi      : true
        }
    ],
    encapsulation: ViewEncapsulation.None
})
export class RadioGroupComponent extends NgFormControl<any> implements OnInit, OnDestroy {

    @OnChange @Input() state = 'off';

    @Input() name: string                         = '';
    @Input() label: string                        = '';
    @Input() disabled: boolean                    = false;
    @Input() bindLabel: string                    = 'label';
    @Input() bindValue: string                    = 'value';
    @OnChange @Input() required: boolean          = false;
    @Input() direction: 'horizontal' | 'vertical' = 'horizontal';
    @Input() parentFormControl: FormControl;
    @Input() parentFormGroup: FormGroup;

    @Input() options: { label: string, value: any }[] = [];

    identifier = `radio-group-${identifier++}`;

    constructor(@Inject(Injector) public injector: Injector, public config: FormConfig) {
        super(injector);
    }

}

let identifier = 0;
