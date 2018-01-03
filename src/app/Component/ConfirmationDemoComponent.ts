import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector     : '.confirmation-demo',
    encapsulation: ViewEncapsulation.None,
    templateUrl  : 'assets/confirmation-demo.html'
})
export class ConfirmationDemoComponent {

    model = {
        label: 'Match This Value',
        match: '',
        value: ''
    };

    markup = `
<text-box
        name="testConfirm"
        [label]="model.label"
        placeholder="provide a value ..."
        [(ngModel)]="model.value"
        required="true"></text-box>
<text-box
        name="testConfirmValue"
        label="Confirm 'Match This Value'"
        [(ngModel)]="model.match"
        required="true"
        [matchValue]="{label: model.label, value: model.value}"
        placeholder="match the previous value ..."></text-box>
    `;


}
