import {
    ViewEncapsulation, Component, Input, ContentChild, TemplateRef, EventEmitter, OnInit, OnDestroy
}                              from '@angular/core';
import {UnsubscribeAll, Value} from '@ng-app-framework/core';
import {NestedSearcher}        from '../../Service/Impl/NestedSearcher';

@Component({
    selector     : 'nested-list',
    template     : `
        <ng-template #defaultTemplate let-item>
            <div class="nested-list-element">{{ item.name ? item.name : item.text}}</div>
        </ng-template>
        <ng-container *ngIf="isTop && searchable">
            <div class="form-group">
                <div class="input-group w-100">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <span class="fa fa-search"></span>
                        </div>
                    </div>
                    <input type="text" class="form-control w-100" name="nested-search"
                           [(ngModel)]="searcher.search"
                           (keyup)="searcher.isTermLongEnough() && updateMatches()"
                           placeholder="Search ..."/>
                </div>
            </div>
        </ng-container>
        <div class="loading-icon" *ngIf="isUpdating()">
            <span class="fa fa-spinner fa-spin"></span>
        </div>
        <div class="nested-list-container {{containerClass}}" [class.top]="isTop" *ngIf="!isUpdating()">
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


    ngOnInit() {
        if (!this.searcher) {
            this.searcher = new NestedSearcher(this.searchBy);
        }
        let stopListening = UnsubscribeAll.merge(this.onDestroy$);
        this.onCollapseAll.takeUntil(stopListening).subscribe(() => {
            this.item.$collapsed = true;
        });
        this.onExpandAll.takeUntil(stopListening).subscribe(() => {
            this.item.$collapsed = false;
        });
        if (this.isTop) {
            this.searcher.isUpdating = true;
            setTimeout(() => {
                this.updateMatches();
            }, 500);
        }
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


    updateMatches() {
        this.searcher.updateMatches(this.item);
    }

    shouldDisplay(item) {
        return item.$shown;
    }

    isUpdating() {
        return this.searcher.isUpdating;
    }

}
