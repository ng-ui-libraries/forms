import {NgModule}                         from '@angular/core';
import {DatePickerComponent}              from './Component/FormControl/DatePickerComponent';
import {CheckBoxComponent}                from './Component/FormControl/CheckBoxComponent';
import {NestedListComponent}              from './Component/FormControl/NestedListComponent';
import {DropDownComponent}                from './Component/FormControl/DropDownComponent';
import {NestedCheckBoxComponent}          from './Component/FormControl/NestedCheckBoxComponent';
import {BsDatepickerModule}               from 'ngx-bootstrap';
import {CommonModule}                     from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule}          from '@angular/platform-browser/animations';
import {NgSelectModule}                   from '@ng-select/ng-select';
import {EmailComponent}                   from './Component/FormControl/EmailComponent';
import {PhoneComponent}                   from './Component/FormControl/PhoneComponent';
import {RadioComponent}                   from './Component/FormControl/RadioComponent';
import {RadioGroupComponent}              from './Component/FormControl/RadioGroupComponent';
import {TabComponent}                     from './Component/FormControl/TabComponent';
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
        RequiredCheckBoxValidator,
        SubmitButtonComponent,
        TextBoxComponent,
        MatchValueValidator,
        RadioGroupComponent,
        RadioComponent,
        PhoneComponent,
        TabComponent
    ],
    imports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgSelectModule,
        BsDatepickerModule.forRoot()
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
        TabComponent
    ],
    providers   : [
        RequiredCheckBoxValidator,
        ValidatorMessenger
    ]
})
export class NgFormsModule {
}
