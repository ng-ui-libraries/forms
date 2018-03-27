import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ValidatorMessenger}                  from '../Service/ValidatorMessenger';


@Component({
    selector     : 'validation-messages',
    template     : `
        <div class="validation-messages-container">
            <div class="alert alert-danger validation-messages" [hidden]="!errors">
                <ul>
                    <li *ngFor="let key of getKeys()">{{getMessage(key)}}</li>
                </ul>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    styleUrls    : ['validation-messages.scss']
})
export class ValidationMessagesComponent {
    @Input() errors: { [key: string]: boolean };
    @Input() label: string = '';


    constructor(public messenger: ValidatorMessenger) {

    }

    getKeys() {
        if (!this.errors) {
            return [];
        }
        return Object.keys(this.errors);
    }

    getMessage(key) {
        return this.messenger.getMessageForError(this.errors, key, 'This');
    }

    getErrorMessages() {

    }
}
