import { RouterModule } from '@angular/router';

import { SignInComponent } from './signin.component';
import { SignUpComponent } from './signup.component';

export const authRouting = RouterModule.forChild([
    { path: 'signup', component: SignUpComponent, data: { title: 'Sign Up' } },
    { path: 'signin', component: SignInComponent, data: { title: 'Sign In' } },

]);