import {CommonModule}        from '@angular/common';
import {Component, NgModule} from '@angular/core';
import {RouterModule}        from '@angular/router';
import {FormsDemoComponent}  from './Component/FormsDemoComponent';
import {FormsDemoModule}     from './FormsDemoModule';

export const routes = [
    {
        path      : '',
        redirectTo: 'forms',
        pathMatch : 'full'
    },
    {
        path     : 'forms',
        component: FormsDemoComponent
    }
];

@Component({
    selector: 'app',
    template: `
        <router-outlet></router-outlet>`
})
export class AppComponent {

}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        CommonModule,
        FormsDemoModule,
        RouterModule.forRoot(routes)
    ],
    exports     : [],
    providers   : [],
    bootstrap   : [AppComponent]

})
export class AppModule {

}
