import {Directive, ElementRef, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[tabindex]:not(input)',
    outputs : ['activate']
})
export class Activatable {
    activate = new EventEmitter<any>();

    constructor(private el: ElementRef) {
        if (!spaceScrollStopped) {
            window.addEventListener('keydown', function (e) {
                if (e.keyCode === 32 && ['TEXTAREA', 'INPUT'].indexOf(e.target['tagName']) === -1) {
                    e.stopPropagation();
                    e.preventDefault();
                    return false;
                }
                return true;
            });
        }
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

let spaceScrollStopped = false;
