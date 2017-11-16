import { TenantComponent } from './tenant.component';

export const routes = [
    {
        path: '', children: [
            { path: '', component: TenantComponent, pathMatch: 'full' },
            { path: 'firstname-lastname/applications/forms', loadChildren: './applications-forms/applications-forms.module#ApplicationFormModule' },
            { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' }
        ]
    }
]