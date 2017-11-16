import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangePasswordComponent} from './changepassword.component.ts';
import {routes} from './changepassword.routes';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {SimpleNotificationsModule} from 'angular2-notifications/dist';
@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    ChangePasswordComponent
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

export class ChangePasswordModule {
  public static routes = routes;
}
