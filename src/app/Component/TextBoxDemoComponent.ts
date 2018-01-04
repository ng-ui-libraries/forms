import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector     : '.text-box-demo',
    encapsulation: ViewEncapsulation.None,
    templateUrl  : 'assets/text-box-demo.html'
})
export class TextBoxDemoComponent {

    model = {
        name       : 'textBoxField',
        icon       : '',
        type: 'text',
        shouldMatch: false,
        match      : '',
        required   : false,
        placeholder: 'Example Text Field',
        value      : ''
    };

    markup = `
<text-box
        [name]="model.name"
        [type]="model.type"
        label="Test Text Field"
        [(ngModel)]="model.value"
        [matchValue]="model.shouldMatch ? {value:model.match,label:'Matching Field'} : null"
        [required]="model.required"
        [placeholder]="model.placeholder">
    <div class="input-group-prepend" *ngIf="model.icon.length > 0">
        <span class="input-group-text">
            <span class="fa fa-{{model.icon}}"></span>
        </span>
    </div>
</text-box>
    `;


}
