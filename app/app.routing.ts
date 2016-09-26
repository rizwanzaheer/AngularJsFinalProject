import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './public/index.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './contact/signup.component';
import { SignInComponent } from './contact/signin.component';
import { NotFoundComponent } from './public/not-found.component';

export const routing = RouterModule.forRoot([
    { path: '', component: IndexComponent },
    { path: 'signup', component: SignUpComponent, data: { title: 'Sign Up' } },
    { path: 'signin', component: SignInComponent, data: { title: 'Sign In' } },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
]);