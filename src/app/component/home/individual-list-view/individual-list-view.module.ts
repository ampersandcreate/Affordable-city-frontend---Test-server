import {routes} from './individual-list-view.routes';
import {IndividualListComponent} from './individual-list-view.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgxGalleryModule} from 'ngx-gallery';
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        IndividualListComponent,

    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        NgxGalleryModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCyZjxhFaAPLudPLGLUjJ24DkAw-so__fg'

        }),
        AgmSnazzyInfoWindowModule,
    ],
})
export class IndividualListViewModule {
    titlemap: string;
    lat: number;
    lng: number;
    style: any;
    public static routes = routes;
}
