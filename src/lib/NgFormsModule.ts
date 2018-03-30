import {NgModule}                         from '@angular/core';
import {BrowserAnimationsModule}          from '@angular/platform-browser/animations';
import {SafePipeModule}                   from 'safe-pipe';
import {DatePickerComponent}              from './Component/FormControl/DatePickerComponent';
import {CheckBoxComponent}                from './Component/FormControl/CheckBoxComponent';
import {NestedFieldComponent}             from './Component/FormControl/NestedFieldComponent';
import {NestedListComponent}              from './Component/FormControl/NestedListComponent';
import {DropDownComponent}                from './Component/FormControl/DropDownComponent';
import {NestedCheckBoxComponent}          from './Component/FormControl/NestedCheckBoxComponent';
import {BsDatepickerModule}               from 'ngx-bootstrap';
import {CommonModule}                     from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule}                   from '@ng-select/ng-select';
import {EmailComponent}                   from './Component/FormControl/EmailComponent';
import {PhoneComponent}                   from './Component/FormControl/PhoneComponent';
import {RadioComponent}                   from './Component/FormControl/RadioComponent';
import {RadioGroupComponent}              from './Component/FormControl/RadioGroupComponent';
import {TabComponent}                     from './Component/FormControl/TabComponent';
import {Activatable}                      from './Directive/Activatable';
import {FormValidationMessagesComponent}  from './Validation/Component/FormValidationMessagesComponent';
import {ValidationMessagesComponent}      from './Validation/Component/ValidationMessagesComponent';
import {RequiredCheckBoxValidator}        from './Validation/Directive/RequiredCheckBoxValidator';
import {SubmitButtonComponent}            from './Component/SubmitButtonComponent';
import {TextBoxComponent}                 from './Component/FormControl/TextBoxComponent';
import {MatchValueValidator}              from './Validation/Directive/MatchValueValidator';
import {ValidatorMessenger}               from './Validation/Service/ValidatorMessenger';

@NgModule({
    declarations: [
        DatePickerComponent,
        CheckBoxComponent,
        NestedListComponent,
        NestedCheckBoxComponent,
        DropDownComponent,
        EmailComponent,
        ValidationMessagesComponent,
        FormValidationMessagesComponent,
        RequiredCheckBoxValidator,
        SubmitButtonComponent,
        TextBoxComponent,
        MatchValueValidator,
        RadioGroupComponent,
        RadioComponent,
        PhoneComponent,
        TabComponent,
        Activatable,
        NestedFieldComponent
    ],
    imports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgSelectModule,
        BsDatepickerModule.forRoot(),
        SafePipeModule
    ],
    exports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NestedListComponent,
        NestedCheckBoxComponent,
        DatePickerComponent,
        CheckBoxComponent,
        DropDownComponent,
        EmailComponent,
        SubmitButtonComponent,
        TextBoxComponent,
        MatchValueValidator,
        RadioGroupComponent,
        RadioComponent,
        PhoneComponent,
        TabComponent,
        Activatable,
        ValidationMessagesComponent,
        FormValidationMessagesComponent,
        NestedFieldComponent
    ],
    providers   : [
        RequiredCheckBoxValidator,
        ValidatorMessenger
    ]
})
export class NgFormsModule {

    constructor() {
        window.addEventListener('keydown', function (e) {
            if (e.keyCode === 32 && ['TEXTAREA', 'INPUT'].indexOf(e.target['tagName']) === -1) {
                e.stopPropagation();
                e.preventDefault();
                return false;
            }
            return true;
        });
    }
}
