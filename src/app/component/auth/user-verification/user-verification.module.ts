import {routes} from './user-verification.routes';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';

import {HttpClientModule} from '@angular/common/http';
import {SimpleNotificationsModule} from 'angular2-notifications/dist';
import {httpFactory} from '../../../middleware/http.factory';
import {UserVerificationComponent} from './user-verification.component';


@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        UserVerificationComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        CommonModule
        ,
        RouterModule.forChild(routes),
        SimpleNotificationsModule.forRoot()
    ],
    providers: [
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions]
        }]
})

export class UserVerificationModule {
    public static routes = routes;
}
