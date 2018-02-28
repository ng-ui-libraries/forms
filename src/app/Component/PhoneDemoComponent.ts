import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    selector     : '.phone-demo',
    encapsulation: ViewEncapsulation.None,
    templateUrl  : 'assets/phone-demo.html'
})
export class PhoneDemoComponent {

    model = {
        id         : 'phoneField',
        name       : 'phoneField',
        required   : false,
        value      : ''
    };

    markup = `
<phone [name]="model.name"
               label="Phone Number"
               [(ngModel)]="model.value"
               [parentFormGroup]="testForm.form"
               [required]="model.required"></phone>
    `;



}
