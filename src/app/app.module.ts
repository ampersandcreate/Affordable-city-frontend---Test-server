import {HomeModule} from './component/home/home.module';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {
    NgModule,
    ApplicationRef, CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import {
    removeNgStyles,
    createNewHosts,
    createInputTransfer
} from '@angularclass/hmr';
import {
    RouterModule,
    PreloadAllModules
} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './app.routes';
// App is our top level component
import {AppComponent} from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {AppState, InternalStateType} from './app.service';

import {AboutComponent} from './about';


import {AgmCoreModule} from '@agm/core';

import '../styles/styles.scss';
import '../styles/headings.css';

import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
// import {HomeComponent} from './component/home/home.component';
import {NoContentComponent} from './component/no-content/no-content.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpWrapperService} from './services/http-wrapper.service';

import {TokenManagerService} from './services/token-manager.service';
import {ApplicationService} from './services/application.service';
import {NotificationsService, SimpleNotificationsModule} from 'angular2-notifications/dist';

import {httpFactory} from './middleware/http.factory';

import {AuthService} from './services/auth.service';
import {AuthGuardService} from './middleware/auth-guard.service';
import {PageHeaderComponent} from './component/page-header/page-header.component';
import {SignInComponent} from './component/auth/signin/signin.component';
import {SignupComponent} from './component/auth/signup/signup.component';
import {Ng4GeoautocompleteModule} from 'ng4-geoautocomplete';
import {MapService} from './component/home/services/map.service';
import {ApartmentModelData} from './component/home/model/apartment.model';
import {NgxGalleryModule} from 'ngx-gallery';






// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState
];

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        AboutComponent,
        NoContentComponent,
        PageHeaderComponent,
       SignInComponent,
       SignupComponent



    ],
    /**
     * Import Angular's modules.
     */
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        CommonModule,
        HomeModule,
              RouterModule.forRoot(ROUTES, {
            useHash: Boolean(history.pushState) === false
            // preloadingStrategy: PreloadAllModules
        }),
       SimpleNotificationsModule.forRoot(),





    ],
    /**
     * Expose our Services and Providers into Angular's dependency injection.
     */
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS,
        AuthGuardService,
        HttpWrapperService,
        TokenManagerService,
        ApplicationService,
        NotificationsService,
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions]
        },
        AuthService,
        MapService,
        ApartmentModelData
    ],

})
export class AppModule {

    constructor(public appRef: ApplicationRef,
                public appState: AppState) {
    }

    public hmrOnInit(store: StoreType) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        /**
         * Set state
         */
        this.appState._state = store.state;
        /**
         * Set input values
         */
        if ('restoreInputValues' in store) {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    public hmrOnDestroy(store: StoreType) {
        const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
        /**
         * Save state
         */
        const state = this.appState._state;
        store.state = state;
        /**
         * Recreate root elements
         */
        store.disposeOldHosts = createNewHosts(cmpLocation);
        /**
         * Save input values
         */
        store.restoreInputValues = createInputTransfer();
        /**
         * Remove styles
         */
        removeNgStyles();
    }

    public hmrAfterDestroy(store: StoreType) {
        /**
         * Display new elements
         */
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }

}
