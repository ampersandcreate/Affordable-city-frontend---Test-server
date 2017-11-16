import { routes } from './financial-option.routes';
import { FinancialOptionComponent } from './financial-option.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
FinancialOptionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class FinancialOptionModule {
  public static routes = routes;
}
