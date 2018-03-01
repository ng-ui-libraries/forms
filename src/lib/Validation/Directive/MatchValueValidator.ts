import {Directive, forwardRef, Input}                                  from '@angular/core';
import {AbstractControl, NG_VALIDATORS, RequiredValidator, Validators} from '@angular/forms';
import {ValidatorMessenger}                                            from '../Service/ValidatorMessenger';
import {ValidatorResults}                                              from '../validate';

@Directive({
    selector :
        '[matchValue]',
    providers: [{
        provide    : NG_VALIDATORS,
        useExisting: forwardRef(() => MatchValueValidator),
        multi      : true
    }]
})
export class MatchValueValidator {

    @Input() matchValue = {
        label  : '',
        value  : '',
        message: ''
    };

    constructor(messenger: ValidatorMessenger) {
        if (!messenger.messages.hasOwnProperty('matchValue')) {
            messenger.messages['matchValue'] = (result: ValidatorResults, key: string, label: string = '') => {
                let message:string = <string>result['message'];
                if (message.length > 0) {
                    return message;
                }
                return `${label} must match ${result.matchLabel}`;
            };
        }
    }

    validate(c: AbstractControl): { [key: string]: any } {
        if (this.matchValue === null) {
            return null;
        }
        return this.getStringValue(c) !== this.matchValue.value.toLowerCase() ? {
            matchValue: {
                expectedValue: this.matchValue.value,
                matchLabel   : this.matchValue.label,
                message      : this.matchValue.message || '',
                actualValue  : c.value
            }
        } : null;
    }

    getStringValue(control: AbstractControl) {
        if (control.value === null || typeof control.value === 'undefined') {
            return '';
        }
        return control.value.toString();
    }

}
