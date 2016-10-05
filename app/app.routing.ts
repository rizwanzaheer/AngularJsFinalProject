import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './public/index.component';
import { NotFoundComponent } from './public/not-found.component';

const appRoutes : Routes =[
    { path: '', component: IndexComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];
export const appRouting : ModuleWithProviders = RouterModule.forRoot(appRoutes);