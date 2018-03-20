import {Component, Input}   from '@angular/core';
import {ValidatorMessenger} from '../Service/ValidatorMessenger';


@Component({
    selector: 'form-validation-messages',
    template: `
        <div class="alert alert-danger validation-messages" *ngIf="errors !== null">
            <ul>
                <ng-container *ngFor="let field of getKeys(errors)">
                    <li *ngFor="let errorKey of errors[field]">
                        {{getMessage(field, errors[field], errorKey)}}
                    </li>
                </ng-container>
            </ul>
        </div>
    `
})
export class ValidationMessagesComponent {
    @Input() errors: { [key: string]: { [key: string]: boolean } };
    @Input() label: string = '';

    constructor(public messenger: ValidatorMessenger) {

    }

    getKeys(object) {
        return Object.keys(object);
    }

    getMessage(label, errors, key) {
        return this.messenger.getMessageForError(errors, key, label);
    }
}
