import {Routes} from '@angular/router';
import {AboutComponent} from './about';
import {DataResolver} from './app.resolver';

import {NoContentComponent} from './component/no-content/no-content.component';
import {AuthGuardService} from './middleware/auth-guard.service';

export const ROUTES: Routes = [
    {path: '', loadChildren: './component/home/home.module#HomeModule', canActivate: [AuthGuardService]},
    {path: 'home', loadChildren: './component/home/home.module#HomeModule'},
    {path: 'sign-in', loadChildren: './component/auth/signin#SignInModule'},
    {path: 'sign-up', loadChildren: './component/auth/signup/signup.module#SignupModule'},
    {
        path: 'user-verification/:id',
        loadChildren: './component/auth/user-verification/user-verification.module#UserVerificationModule'

    },
    { path: 'forgot-password', loadChildren: './component/auth/forgotpassword/forgotpassword.module#ForgotPasswordModule' },
    { path: 'reset-password', loadChildren: './component/auth/resetpassword/resetpassword.module#ResetPasswordModule' },
    { path: 'change-password', loadChildren: './component/auth/changepassword/changepassword.module#ChangePasswordModule' },
    {path: 'about', component: AboutComponent},
    {path: 'blog', loadChildren: './component/additional/blog/blog.module#BlogModule'},
    {path: 'press', loadChildren: './component/additional/press/press.module#PressModule'},
    {path: 'pricing', loadChildren: './component/additional/pricing/pricing.module#PricingModule'},
    {path: 'detail', loadChildren: './+detail#DetailModule'},
    {path: 'barrel', loadChildren: './component/+barrel/barrel.module#BarrelModule'},
    {
        path: 'dashboard',
        loadChildren: './component/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'financial-options',
        loadChildren: './component/financial-option/financial-option.module#FinancialOptionModule'
    },
    {path: '**', component: NoContentComponent},
];
