import {routes} from './home.routes';
import {HomeComponent} from './home.component';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ApartmentModelData} from '../Component/home/models/apartment.model';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {AgmCoreModule} from '@agm/core';
import {SliderBarComponent} from '../util/slider-bar/slider-bar.component';
import {SliderBarDirective} from "../util/slider-bar/slider-bar.directive";
import {SliderPickerComponent} from '../util/slider-picker/slider-picker.component';
import {SliderPickerDirective} from '../util/slider-picker/slider-picker.directive';
import {SliderPopoverComponent} from '../util/slider-popover/slider-popover.component';
import {Ng4GeoautocompleteModule} from 'ng4-geoautocomplete';






@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        HomeComponent,
        SliderBarComponent,
        SliderPickerComponent,
        SliderBarDirective,
        SliderPickerDirective,
        SliderPopoverComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCyZjxhFaAPLudPLGLUjJ24DkAw-so__fg',
            libraries: ["places"]
        }),
        AgmSnazzyInfoWindowModule,
        Ng4GeoautocompleteModule.forRoot(),
 ],
    providers: []
})
export class HomeModule {
    public static routes = routes;
}
