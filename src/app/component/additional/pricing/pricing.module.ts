import { routes } from './pricing.routes';
import { PricingComponent } from './pricing.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({

declarations:[
    PricingComponent
],
imports:[
FormsModule,
CommonModule,
RouterModule.forChild(routes)
]


})
export class PricingModule {
  public static routes = routes;
}