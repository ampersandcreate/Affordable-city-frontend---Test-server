import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog.component';
import { routes } from './blog.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({

declarations:[
    BlogComponent
],
imports:[
FormsModule,
CommonModule,
RouterModule.forChild(routes)
]


})
export class BlogModule {
  public static routes = routes;
}