import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate, RouterLinkActive } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './public/index.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './contact/signup.component';
import { SignInComponent } from './contact/signin.component';
import { NotFoundComponent } from './public/not-found.component';

const appRoutes: Routes = [
//   { path: 'hero/:id', component: HeroDetailComponent },
//   { path: 'crisis-center', component: CrisisCenterComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: {
//       title: 'Heroes List'
//     }
//   },
//    { path: 'user', component: FooterComponent },
     { path: '', component: IndexComponent },
     { path: 'user', component: UserComponent },
     { path: 'post', component: PostComponent },
     { path: 'signup', component: SignUpComponent },
     { path: 'signin', component: SignInComponent },
     { path: 'not-found', component: NotFoundComponent },
     { path: '**', redirectTo: 'not-found' },
     
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
