import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './signin.component';
import {routes} from './signin.routes';
import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {SimpleNotificationsModule} from 'angular2-notifications/dist';
import {httpFactory} from '../../../middleware/http.factory';

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        //SignInComponent,
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        CommonModule,
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

export class SignInModule {
    public static routes = routes;
}
