import {Directive, ElementRef, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[tabindex]:not(input)',
    outputs : ['activate']
})
export class Activatable {
    activate = new EventEmitter<any>();

    constructor(private el: ElementRef) {
    }

    @HostListener('keyup', ['$event']) onKeyUp($event) {
        $event.stopPropagation();
        $event.preventDefault();
        if ($event.key === 'Enter' || $event.key === ' ') {
            this.activate.emit();
            return false;
        }
    }

    @HostListener('mouseup', ['$event']) onMouseUp($event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.activate.emit();
        return false;
    }
}
