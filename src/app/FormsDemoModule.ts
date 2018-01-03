import {Component, NgModule, ViewEncapsulation} from '@angular/core';
import {RouterModule}                           from '@angular/router';
import {BrowserModule}                          from '@angular/platform-browser';
import {CommonModule}                           from '@angular/common';
import {NgFormsModule}                          from '../lib/NgFormsModule';
import {ConfirmationDemoComponent}   from './Component/ConfirmationDemoComponent';
import {FormsDemoComponent}          from './Component/FormsDemoComponent';
import {CheckBoxDemoComponent}       from './Component/CheckBoxDemoComponent';
import {EmailDemoComponent}          from './Component/EmailDemoComponent';
import {DatePickerDemoComponent}     from './Component/DatePickerDemoComponent';
import {DropDownDemoComponent}       from './Component/DropDownDemoComponent';
import {IndexComponent}              from './Component/IndexComponent';
import {NestedListDemoComponent}     from './Component/NestedListDemoComponent';
import {NestedCheckBoxDemoComponent} from './Component/NestedCheckBoxDemoComponent';
import {RadioDemoComponent}          from './Component/RadioDemoComponent';
import {TextBoxDemoComponent}        from './Component/TextBoxDemoComponent';


export const routes = [
    {
        path    : 'forms',
        children: [
            {
                path: '',
                component: IndexComponent
            },
            {
                path     : 'check-box',
                component: CheckBoxDemoComponent
            },
            {
                path     : 'match-value',
                component: ConfirmationDemoComponent
            },
            {
                path     : 'date-picker',
                component: DatePickerDemoComponent
            },
            {
                path     : 'drop-down',
                component: DropDownDemoComponent
            },
            {
                path     : 'nested-list',
                component: NestedListDemoComponent
            },
            {
                path     : 'nested-check-box',
                component: NestedCheckBoxDemoComponent
            },
            {
                path     : 'email',
                component: EmailDemoComponent
            },
            {
                path     : 'text-box',
                component: TextBoxDemoComponent
            },
            {
                path     : 'radio',
                component: RadioDemoComponent
            }
        ]
    },
    {
        path      : '',
        redirectTo: 'forms',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        IndexComponent,
        FormsDemoComponent,
        CheckBoxDemoComponent,
        ConfirmationDemoComponent,
        DatePickerDemoComponent,
        DropDownDemoComponent,
        NestedListDemoComponent,
        NestedCheckBoxDemoComponent,
        EmailDemoComponent,
        TextBoxDemoComponent,
        RadioDemoComponent
    ],
    imports     : [
        BrowserModule,
        CommonModule,
        NgFormsModule,
        RouterModule.forRoot(routes)
    ],
    exports     : [FormsDemoComponent],
    providers   : [],
    bootstrap   : [FormsDemoComponent]

})
export class FormsDemoModule {

}
