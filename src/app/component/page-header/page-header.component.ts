import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApplicationService, DEFAULTS, IApp} from '../../services/application.service';
import {AuthService} from '../../services/auth.service';
import {NotificationsService} from 'angular2-notifications/dist';
import {DEFAULT_NOTIFICATION_OPTIONS, ROUTES} from '../../config-files/constants';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.css']
})

export class PageHeaderComponent implements OnInit {
    state: IApp = DEFAULTS;
    fullName: string = 'undefined';
    isSignin: boolean;
    isSignup: boolean;
    nonAuthorizedRoute: any = ROUTES.NON_AUTHORIZED_ROUTE;

    constructor(private _router: Router,
                private _authService: AuthService,
                private _notification: NotificationsService,
                private _appService: ApplicationService) {

        console.log('Ok');

    }

    ngOnInit() {

        this._appService.$stream.subscribe(
            (state) => {
                console.log("State: => ", state);
                this.state = state;
                this.fullName = [state.user.FirstName, state.user.LastName].join(' ');
                // if (state.isAuthenticated) {
                //     this.state = state;
                //     this.fullName = [state.user.FirstName, state.user.LastName].join(' ');
                // }
            }
        )
    }

    onSignupClick($event) {
        this.isSignin = false;
        this.isSignup = true;
    }

    onSigninClick($event) {
        $event.preventDefault();
        this.isSignin = true;
        this.isSignup = false;
    }

    signOut($event: any) {
        $event.preventDefault();
        this._authService.signOut().subscribe(
            () => {

                this._router.navigate([ROUTES.NON_AUTHORIZED_ROUTE]);
            },
            () => {
                this._notification.error('Error', 'Unable to logout!', DEFAULT_NOTIFICATION_OPTIONS)
            }
        );
    }
}
