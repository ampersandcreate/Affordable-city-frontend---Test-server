import { PressComponent } from './press.component';
import { routes } from './press.routes';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({

declarations:[
    PressComponent
],
imports:[
FormsModule,
CommonModule,
RouterModule.forChild(routes)
]


})
export class PressModule {
  public static routes = routes;
}