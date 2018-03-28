import {Component, Injector, Input, ViewEncapsulation} from '@angular/core';

import {FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {NgFormControl}                                         from '../NgFormControl';


@Component({
    selector     : 'phone',
    templateUrl  : 'assets/phone.html',
    styleUrls    : ['../../Validation/Component/validation-messages.scss'],
    encapsulation: ViewEncapsulation.None,
    providers    : [{
        provide    : NG_VALUE_ACCESSOR,
        useExisting: PhoneComponent,
        multi      : true
    }]
})

export class PhoneComponent extends NgFormControl<string> {
    @Input() name: string      = '';
    @Input() label: string     = 'Phone Number';
    @Input() disabled: boolean = false;
    @Input() required: boolean = false;

    @Input() parentFormControl: FormControl;
    @Input() parentFormGroup: FormGroup;

    additionalValidators = <any[]>[
        Validators.pattern('\\d{3}\\-\\d{3}\\-\\d{4}')
    ];

    phoneForm = {
        part1: '',
        part2: '',
        part3: ''
    };

    identifier = `phone-${identifier++}`;


    constructor(public injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        if (this.value.length > 0) {
            let phone            = this.value.replace(/[^\d\-]+/g, '').split('-');
            this.phoneForm.part1 = phone[0];
            this.phoneForm.part2 = phone[1];
            this.phoneForm.part3 = phone[2];
        }
    }

    getFor() {
        let field = 'part1';
        if (this.phoneForm.part1.length > 2) {
            field = 'part2';

            if (this.phoneForm.part2.length > 2) {
                field = 'part3';

                if (this.phoneForm.part3.length > 3) {
                    field = 'extension';
                }
            }
        }
        return field;
    }

    format() {
        this.value = this.phoneForm.part1;
        if (this.phoneForm.part1.length === 3) {
            this.value += '-' + this.phoneForm.part2;
        }
        if (this.phoneForm.part2.length === 3) {
            this.value += '-' + this.phoneForm.part3;
        }
        this.control.markAsTouched();
        this.triggerValidation();
    }

    onKeyUp(event: KeyboardEvent, currentElement, nextElement) {
        let ignoreNextFocusKeys = ['tab', 'enter', 'backspace', 'arrowleft', 'arrowright', 'shift'];
        if (ignoreNextFocusKeys.indexOf(event.key.toLowerCase()) === -1 && nextElement && (currentElement.selectionStart === 3)) {
            nextElement.focus();
        }
        this.format();
    }
}

let identifier = 1;
