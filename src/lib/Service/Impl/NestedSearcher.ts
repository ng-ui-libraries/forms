import {Searcher}     from './Searcher';
import {Observable}   from 'rxjs/Rx';
import {Async, Value} from '@ng-app-framework/core';

export class NestedSearcher extends Searcher {

    isUpdating = false;

    all = {};

    updateMatches(item) {
        this.isUpdating = true;
        setTimeout(() => {
            this.initializeMetadata(item);
            this.updateChildrenForItem$(item, item).subscribe({
                complete: () => {
                    if (!this.isTermLongEnough()) {
                        item.$shown     = true;
                        item.$collapsed = false;
                    }
                    this.isUpdating = false;
                }
            });
        }, 500);
    }

    initializeMetadata(item, parent?: any) {
        if (!this.all.hasOwnProperty(item.id || item.constant)) {
            this.all[item.id || item.constant] = item;
        }
        item.parent         = parent ? parent.id || parent.constant : null;
        item.$parentMatches = item.$parentMatches || false;
        item.$shown         = item.$parentMatches || !this.isTermLongEnough();
        item.$matches       = false;
        item.$childMatches  = false;
        item.$matches       = this.isTermLongEnough() && this.doesItemMatchSearch(item);
        item.$collapsed     = false;
    }

    updateChildrenForItem$(item, top) {
        if (item.hasOwnProperty('children') && Array.isArray(item['children']) && item['children'].length > 0) {
            return Observable.from(item.children)
                             .flatMap((child: any) => {
                                 this.initializeMetadata(child, item);
                                 child.$parentMatches = item.$matches || item.$parentMatches;
                                 return Observable.of(child).concat(this.updateChildrenForItem$(child, top));
                             })
                             .filter(child => child.$matches)
                             .do((child: any) => {
                                 this.updateParentChildMatches(child);
                                 top.$childMatches = true;
                             })
                             .toArray()
                             .do((list) => {
                                 item.$shown     = !this.isTermLongEnough() || item.$childMatches || item.$parentMatches || item.$matches;
                                 item.$collapsed = !this.isTermLongEnough() || item.$matches || !item.$childMatches;
                             });
        }
        item.$shown     = !this.isTermLongEnough() || item.$parentMatches || item.$matches;
        item.$collapsed = true;
        return Observable.from([]);
    }

    updateParentChildMatches(item) {
        if (item.parent) {
            this.all[item.parent].$childMatches = true;
            this.updateParentChildMatches(this.all[item.parent]);
        }
    }

    doesParentMatchSearch$(item) {
        if (item.parent) {
            if (!this.doesItemMatchSearch(this.all[item.parent])) {
                return this.doesParentMatchSearch$(this.all[item.parent]);
            }
            return Async.getObservableForValue$(true);
        }
        return Async.getObservableForValue$(false);
    }


    doesItemMatchSearch$(item): Observable<boolean> {
        if (this.doesItemMatchSearch(item)) {
            return Async.getObservableForValue$(true);
        }
        return this.areAnyChildrenFound$(item);
    }

    areAnyChildrenFound$(item): Observable<boolean> {
        if (Value.hasArrayElements(item.children)) {
            return this.doAnyChildrenMatchSearch$(item);
        }
        return Async.getObservableForValue$(false);
    }

    doAnyChildrenMatchSearch$(item) {
        return Async.mapToObservable$(
            item.children,
            child => this.doesItemMatchSearch$(child)
        )
                    .toArray()
                    .map(arr => arr.indexOf(true) > -1);
    }
}
