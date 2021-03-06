import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    selector     : 'forms-demo',
    encapsulation: ViewEncapsulation.None,
    templateUrl  : 'assets/demo.html',
    styleUrls    : ['../../../public/demo-styles.scss']
})
export class FormsDemoComponent {

    constructor() {

    }

    getRoute(path:string) {
        return ['', 'forms', path];
    }

    log(value) {
        console.log(value);
    }

}
