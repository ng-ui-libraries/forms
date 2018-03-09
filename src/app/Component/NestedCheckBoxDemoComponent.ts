import {Component, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
    selector     : '.nested-check-box-demo',
    encapsulation: ViewEncapsulation.None,
    templateUrl  : 'assets/nested-check-box-demo.html'
})
export class NestedCheckBoxDemoComponent {
    model = {
        required: false,
        selected: [],
        options : []
    };

    initialized = false;

    markup = `
<nested-check-box
        [options]="model.options"
        [(ngModel)]="model.selected"
        [required]="model.required"
        name="testList"
        label="Test Nested Options"
        [searchBy]="['name']">
</nested-check-box>
    `;

    ngOnInit() {

        setTimeout(() => {
            this.model.options.splice(1, this.model.options.length);
            for (let i = 1; i < 50; i++) {
                this.model.options.push({
                    id      : parseInt(`${i}00`),
                    name    : 'Test Parent ' + i,
                    children: [
                        {
                            id      : parseInt(`${i}10`),
                            name    : 'Test Child 1',
                            children: [
                                {
                                    id  : parseInt(`${i}11`),
                                    name: 'Test Child of Child 1'
                                }
                            ]
                        },
                        {
                            id      : parseInt(`${i}20`),
                            name    : 'Test Child 2',
                            children: [
                                {
                                    id  : parseInt(`${i}21`),
                                    name: 'Test Child of Child 2'
                                }
                            ]
                        },
                        {
                            id      : parseInt(`${i}30`),
                            name    : 'Test Child 3',
                            children: [
                                {
                                    id  : parseInt(`${i}31`),
                                    name: 'Test Child of Child 3'
                                }
                            ]
                        },
                        {
                            id      : parseInt(`${i}40`),
                            name    : 'Test Child 4',
                            children: [
                                {
                                    id  : parseInt(`${i}41`),
                                    name: 'Test Child of Child 4'
                                }
                            ]
                        }, {
                            id      : parseInt(`${i}50`),
                            name    : 'Test Child 5',
                            children: [
                                {
                                    id  : parseInt(`${i}51`),
                                    name: 'Test Child of Child 5'
                                }
                            ]
                        },
                        {
                            id      : parseInt(`${i}60`),
                            name    : 'Test Child 6',
                            children: [
                                {
                                    id  : parseInt(`${i}61`),
                                    name: 'Test Child of Child 6'
                                }
                            ]
                        },
                        {
                            id      : parseInt(`${i}70`),
                            name    : 'Test Child 7',
                            children: [
                                {
                                    id  : parseInt(`${i}71`),
                                    name: 'Test Child of Child 7'
                                }
                            ]
                        },
                        {
                            id      : parseInt(`${i}80`),
                            name    : 'Test Child 8',
                            children: [
                                {
                                    id  : parseInt(`${i}81`),
                                    name: 'Test Child of Child 8'
                                }
                            ]
                        }
                    ]
                });
                this.initialized = true;
            }
        }, 500);
    }
}
