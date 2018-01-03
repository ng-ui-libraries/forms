import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    selector     : '.email-demo',
    encapsulation: ViewEncapsulation.None,
    templateUrl  : 'assets/email-demo.html'
})
export class EmailDemoComponent {

    model = {
        id         : 'emailField',
        name       : 'emailField',
        match      : '',
        required   : false,
        placeholder: 'Example Email Field',
        value      : ''
    };

    markup = `
<email
        [name]="model.name"
        label="Email Address"
        [(ngModel)]="model.value"
        [required]="model.required"
        [placeholder]="model.placeholder"></email>
<email name="confirmEmail" label="Confirm Email Address"
       [(ngModel)]="model.match"
       [matchValue]="{value:model.value,label:'Email Address'}"
       [required]="true"
       placeholder="Confirm Email"></email>
    `;



}
