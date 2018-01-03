import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    selector     : '.radio-demo',
    encapsulation: ViewEncapsulation.None,
    templateUrl  : 'assets/radio-demo.html'
})
export class RadioDemoComponent {

    model = {
        name    : 'testRadio',
        required: false,
        horizontal: false,
        value   : '',
        options : [
            {
                label: 'Option 1',
                value: 'option-1'
            },
            {
                label: 'Option 2',
                value: 'option-2'
            },
            {
                label: 'Option 3',
                value: 'option-3'
            }
        ]
    };

    markup = `
<radio-group [name]="model.name"
             label="Test Radio Group"
             [options]="model.options"
             [required]="model.required"
             [(ngModel)]="model.value">
</radio-group>
    `;
}


