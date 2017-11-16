import {routes} from './signup.routes';
import {SignupComponent} from './signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';

import {HttpClientModule} from '@angular/common/http';
import {SimpleNotificationsModule} from 'angular2-notifications/dist';
import {httpFactory} from '../../../middleware/http.factory';
import {AuthService} from '../../../services/auth.service';
import {ApplicationService} from '../../../services/application.service';


@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        SignupComponent,
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

export class SignupModule {
    public static routes = routes;
}
