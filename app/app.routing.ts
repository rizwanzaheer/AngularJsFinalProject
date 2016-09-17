import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
//   { path: '', component: HomeComponent },
//   { path: '**', component: PageNotFoundComponent }
    { path: '**', redirectTo: 'not-found' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
