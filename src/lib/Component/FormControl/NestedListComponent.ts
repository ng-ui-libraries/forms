import {
    ViewEncapsulation, Component, Input, ContentChild, TemplateRef, EventEmitter, OnInit, OnDestroy
} from '@angular/core';
import {UnsubscribeAll, Value} from "@ng-app-framework/core";
import {NestedSearcher} from "../../Service/Impl/NestedSearcher";

@Component({
    selector     : 'nested-list',
    template     : `
        <ng-template #defaultTemplate let-item>
            <div class="nested-list-element">{{ item.name ? item.name : item.text}}</div>
        </ng-template>
        <ng-container *ngIf="isTop && searchable">
            <text-box name="nested-search" class="full-width"
                      [(ngModel)]="searcher.search"
                      (ngModelChange)="updateSearch$.emit($event)"
                      placeholder="Search ..." icon="search"
                      shouldValidate="false"></text-box>
        </ng-container>
        <div class="nested-list-container {{containerClass}}" [class.top]="isTop">
            <div class="parent-node" [class.has-children]="!isCollapsed() && hasChildren()"
                 [class.show-lines]="showLines"
                 [class.bold]="item['$matches']"
                 (click)="!collapseButton ? toggle() : null"
                 *ngIf="shouldDisplay(item)">
                <ng-container
                        *ngTemplateOutlet="template ? template : defaultTemplate;context:{$implicit: item}"></ng-container>
                <span *ngIf="hasChildren() && collapseButton" class="fa" [class.fa-plus]="isCollapsed()"
                      [class.fa-minus]="!isCollapsed()"
                      (click)="toggle()"></span>
                <div class="parent-node-end"></div>
            </div>
            <div class="children-list" *ngIf="hasChildren() && shouldDisplay(item) && !isCollapsed()">
                <ng-container *ngFor="let child of item.children">
                    <nested-list [item]="child" [template]="template" [initialCollapse]="true"
                                 [searcher]="searcher"
                                 [showLines]="showLines" [collapseButton]="collapseButton"
                                 [onCollapseAll]="onCollapseAll" [onExpandAll]="onExpandAll"
                                 [isTop]="false">

                    </nested-list>
                </ng-container>
                <div class="list-end"></div>
            </div>
        </div>
    `,
    styleUrls    : ['./assets/nested-list.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NestedListComponent implements OnInit, OnDestroy {

    @Input() item: { [key: string]: any, children: any[] };
    @Input() @ContentChild(TemplateRef) template;

    @Input() collapsed       = false;
    @Input() initialCollapse = false;

    @Input() onCollapseAll = new EventEmitter<any>();
    @Input() onExpandAll   = new EventEmitter<any>();

    @Input() searchBy: string[] = ['name'];

    @Input() collapseButton = true;
    @Input() showLines      = true;
    @Input() isTop          = true;

    onDestroy$ = new EventEmitter<any>();

    @Input() searcher: NestedSearcher;
    @Input() searchable: boolean = true;

    @Input() containerClass: string = '';

    updateSearch$ = new EventEmitter<string>();

    ngOnInit() {
        if (!this.searcher) {
            this.searcher = new NestedSearcher(this.searchBy);
        }
        this.item.$collapsed = this.searcher.isTermLongEnough() ? this.item.$collapsed : this.initialCollapse;
        let stopListening    = UnsubscribeAll.merge(this.onDestroy$);
        this.onCollapseAll.takeUntil(stopListening).subscribe(() => {
            this.item.$collapsed = true;
        });
        this.onExpandAll.takeUntil(stopListening).subscribe(() => {
            this.item.$collapsed = false;
        });
        this.updateSearch$.debounceTime(1000).takeUntil(stopListening).subscribe((value) => {
            this.updateMatches(value);
        });

    }

    ngOnDestroy() {
        this.onDestroy$.emit();
    }

    hasChildren() {
        return this.item && Value.hasArrayElements(this.item.children);
    }

    isCollapsed() {
        return this.item.$collapsed;
    }

    toggle() {
        this.item.$collapsed = !this.item.$collapsed;
    }


    updateMatches($event) {
        this.searcher.search = $event;
        this.searcher.updateMatches(this.item);
    }

    shouldDisplay(item) {
        return !this.searcher.isTermLongEnough() || item.$shown;
    }

}
