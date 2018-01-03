import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    selector     : '.date-picker-demo',
    encapsulation: ViewEncapsulation.None,
    templateUrl  : 'assets/date-picker-demo.html'
})
export class DatePickerDemoComponent {

    model = {
        value   : null,
        required: false,
        minDate : new Date(),
        maxDate : new Date()
    };

    markup = `
<date-picker
     name="testDatepicker"
     label="Test Date Picker"
     [(ngModel)]="model.value"
     [required]="model.required"
     [minDate]="model.minDate"
     [maxDate]="model.maxDate"></date-picker>
    `;

    constructor() {
        let minDate = new Date();
        minDate.setMonth(minDate.getMonth() - 1);
        let maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 1);
        this.model.minDate = minDate;
        this.model.maxDate = maxDate;
    }

}
