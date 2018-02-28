import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';


@Component({
    selector     : 'tab',
    template     : `
        <li class="nav-item">
            <a class="nav-link"
               (keyup.enter)="trigger.emit()"
               (keyup.space)="trigger.emit()"
               (click)="trigger.emit()"
               [class.active]="isActive"
               tabindex="0">
                <ng-content></ng-content>
            </a>
        </li>`,
    encapsulation: ViewEncapsulation.None,
})

export class TabComponent {

    @Input() isActive = false;
    @Output() trigger = new EventEmitter<any>();

    log($event) {
        console.log($event.key);
    }
}

