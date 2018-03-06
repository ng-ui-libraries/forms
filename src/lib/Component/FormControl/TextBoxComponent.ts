import {
    Component, Input, ViewChild, ViewEncapsulation, Injector,
    Output, EventEmitter
}                                                  from '@angular/core';
import {NG_VALUE_ACCESSOR, FormControl, FormGroup} from '@angular/forms';
import {OnChange}                                  from '@ng-app-framework/core';
import {Observable}                                from 'rxjs/Rx';
import {NgFormControl}                             from '../NgFormControl';

@Component({
    selector     : 'text-box',
    template     : `
        <ng-container *ngIf="initialized">
            <div class="form-group" [class.validate-input]="shouldValidate" [class.no-validate-input]="!shouldValidate">
                <label [attr.for]="identifier" *ngIf="label.length > 0">
                    {{label}}
                    <ng-container *ngIf="required">*</ng-container>
                </label>
                <div></div>
                <div class="input-group ng-control" (click)="click.emit()"
                     [ngClass]="{'ng-invalid':(isInvalid$() | async), 'ng-touched':(touched$ | async), 'ng-valid':!(isInvalid$() | async)}">
                    <ng-content select=".input-group-prepend"></ng-content>
                    <input class="form-control" [type]="type" #input
                           (focus)="inputFocus.emit()"
                           [placeholder]="placeholder || ''"
                           [id]="identifier"
                           [name]="name"
                           [disabled]="disabled"
                           [(ngModel)]="value"
                           (blur)="triggerValidation()"
                           [attr.autofocus]="autofocus || null"
                           [attr.autocapitalize]="autocapitalize"
                           [attr.autocorrect]="autocorrect"
                           [attr.spellcheck]="spellcheck"
                           [attr.data-lpignore]="disableLastPass || null"
                           tabindex="0"
                    />
                    <ng-content select=".input-group-append"></ng-content>
                </div>
                <validation-messages *ngIf="(isInvalid$() | async)" [errors]="failures" [label]="label">
                </validation-messages>
            </div>
        </ng-container>
    `,
    styleUrls    : ['./assets/field.scss'],
    providers    : [{
        provide    : NG_VALUE_ACCESSOR,
        useExisting: TextBoxComponent,
        multi      : true
    }],
    encapsulation: ViewEncapsulation.None
})
export class TextBoxComponent extends NgFormControl<string> {

    @Input() name: string                = null;
    @OnChange @Input() required: boolean = false;
    @OnChange @Input() disabled: boolean = false;
    @Input() parentFormControl: FormControl;
    @Input() parentFormGroup: FormGroup;
    @Input() label: string               = '';
    @Input() placeholder: string         = null;
    @Input() shouldValidate              = true;
    @Output() click                      = new EventEmitter<any>();
    @Output() inputClick                 = new EventEmitter<any>();
    @Output() inputFocusOut              = new EventEmitter<any>();
    @Output() inputFocus                 = new EventEmitter<any>();

    @Input() disableLastPass = false;


    @Input() type: string   = 'text';
    @Input() autofocus      = null;
    @Input() autocorrect    = true;
    @Input() autocapitalize = true;
    @Input() spellcheck     = true;

    @Input() format: { regex: RegExp | RegExp[], replacement: string | Function };

    @ViewChild('input') input;

    protected identifier = `text-box-${identifier++}`;

    constructor(public injector: Injector) {
        super(injector);
    }

    onLoad() {
        if (!this.input || !this.input.nativeElement) {
            setTimeout(() => this.onLoad(), 500);
            return;
        }
        Observable.fromEvent(this.input.nativeElement, 'keydown')
                  .takeUntil(this.onDestroy$)
                  .subscribe((event: KeyboardEvent) => {
                      if (event.key === 'Tab') {
                          this.triggerValidation();
                      }
                  });
    }

    protected triggerValidation() {
        super.triggerValidation();
        this.inputFocusOut.emit();
    }
}

let identifier = 0;
