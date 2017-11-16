import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForgotPasswordComponent} from './forgotpassword.component';
import {routes} from './forgotpassword.routes';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {SimpleNotificationsModule} from 'angular2-notifications/dist';
@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    ForgotPasswordComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes),
    SimpleNotificationsModule.forRoot()

  ]

})

export class ForgotPasswordModule {
  public static routes = routes;
}
