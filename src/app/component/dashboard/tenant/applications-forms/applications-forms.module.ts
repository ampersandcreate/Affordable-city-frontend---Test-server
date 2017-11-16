import { ApplicationsFormsComponent } from './applications-forms.component';
import { routes } from './applications-forms.routes';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
ApplicationsFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ApplicationFormModule {
  public static routes = routes;
}
