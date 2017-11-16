import {Component,ViewChild, ElementRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SigninService} from '../services/signin.service';
import {NotificationsService} from 'angular2-notifications/dist';
import {API_RESPONSE, DEFAULT_NOTIFICATION_OPTIONS, ROUTES} from '../../../config-files/constants';
import {ISignin} from '../models/signin.model';
import {AuthService} from '../../../services/auth.service';
import {ApplicationService} from '../../../services/application.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ModalService } from '../../../services/model.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
    providers: [SigninService]
})

export class SignInComponent {
    @ViewChild('closeBtn') closeBtn: ElementRef;
    signinForm: FormGroup;
    UserName: FormControl;
    Password: FormControl;

    constructor(private fb: FormBuilder,
                private _signinService: SigninService,
                private _notification: NotificationsService,
                private _authService: AuthService,
                private _applicationService: ApplicationService,
                private _route: ActivatedRoute,
                private _router: Router) {
        this.initForm();

    }
    private closeModal(): void {
        this.closeBtn.nativeElement.click();
    }

    private openPopUp():void{

        this.closeBtn.nativeElement.click();
        console.log("Hello I am clicked");

    }
    onSubmit(user: ISignin) {
        this._signinService.signIn(user).subscribe(
            (response: any) => {
                if (response.status === 0) {
                    this._notification.error('Error', 'Invalid Password!', DEFAULT_NOTIFICATION_OPTIONS)
                }
                else if (response.status === API_RESPONSE.OK) {
                    this._authService.storeJwt(response.json().data.Token, response.json().data.Refresh_Token);
                    this._applicationService.setToken(response.json().data.Token);
                    this._notification.success('Success', 'Welcome', DEFAULT_NOTIFICATION_OPTIONS);
                    this.closeModal();
                    let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
                    this._router.navigate([returnUrl || ROUTES.POST_DASHBOARD]);

                }

            },
            (error: any) => {

                this._notification.error('Alert', error.json().errors, DEFAULT_NOTIFICATION_OPTIONS);
            }
        );

    }

    private initForm() {
        this.signinForm = this.fb.group({
            UserName: new FormControl('akhi1@gmail.com', [Validators.required, Validators.email]),
            Password: new FormControl(null, Validators.required)
        })
        ;
    }


}
