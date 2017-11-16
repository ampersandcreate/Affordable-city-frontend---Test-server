import { ApplyApartmentComponent } from './apply-for-apartment.component';
import { routes } from './apply-for-apartment.routes';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
ApplyApartmentComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class ApplyApartmentModule {
  public static routes = routes;
}
