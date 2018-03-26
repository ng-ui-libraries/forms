import {EventEmitter} from '@angular/core';

export class DragAndDrop {

    source: any = null;
    isDragging  = false;

    onDrag = new EventEmitter<any>();
    onDrop = new EventEmitter<any>();

    drag(source) {
        this.source = source;
        this.onDrag.emit(source);
    }

    drop(destination) {
        if (this.source !== destination) {
            this.onDrop.emit({
                source: this.source,
                destination
            });
        }
        this.isDragging = false;
        this.source     = null;
    }

    moveMouse() {
        if (this.source) {
            this.isDragging = true;
            return;
        }
        this.isDragging = false;
    }

    abort() {
        this.isDragging = false;
        this.source     = null;
    }
}
