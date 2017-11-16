import { routes } from './tenant.routes';
import { TenantComponent } from './tenant.component';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    TenantComponent
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class TenantModule {
  public static routes = routes;
}
