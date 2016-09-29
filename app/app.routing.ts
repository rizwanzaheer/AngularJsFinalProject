import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './public/index.component';
import { NotFoundComponent } from './public/not-found.component';

export const routing = RouterModule.forRoot([
    { path: '', component: IndexComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
]);