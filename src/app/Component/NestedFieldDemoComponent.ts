import {Component, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
    selector     : '.nested-field-demo',
    encapsulation: ViewEncapsulation.None,
    templateUrl  : 'assets/nested-field-demo.html'
})
export class NestedFieldDemoComponent {
    model = {
        required: false,
        value: {
            id: 1,
            name: 'aha!',
            children: [
                {
                    id: 2,
                    name: 'aha child',
                    children: [
                        {
                            id: 3,
                            name: 'Hi!'
                        }
                    ]
                }
            ]
        }
    };

    initialized = false;

    markup = `
    `;

    ngOnInit() {
    }
}
