import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector     : '.checkbox-demo',
    encapsulation: ViewEncapsulation.None,
    templateUrl  : 'assets/checkbox-demo.html'
})
export class CheckBoxDemoComponent {

    model = {
        ngModel     : null,
        name        : 'testCheckBox',
        isThreeState: false,
        required    : true,
        state       : 'off',
        value       : 'CHECK BOX IS CHECKED!'
    };

    markup = `
<check-box
    [name]="model.name"
    [required]="model.required"
    [threeState]="model.isThreeState"
    [checkedValue]="model.value"
    [(ngModel)]="model.ngModel"
    [(state)]="model.state"
    label="Test Check Box"></check-box>
    `;
}


