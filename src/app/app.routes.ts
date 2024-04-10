import { Routes } from '@angular/router';
import { SingInComponent } from './page/sing-in/sing-in.component';
import { SingUpComponent } from './page/sing-up/sing-up.component';
import { ResetComponent } from './page/reset/reset.component';

export const routes: Routes = [
    {path: '', component: SingInComponent},
    {path: 'singup', component: SingUpComponent},
    {path: 'reset', component: ResetComponent},
];
