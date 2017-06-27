import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {ErrorPageComponent} from './error-page/error-page.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'users', component: UsersComponent },
  // {path: 'users/:id', component: UsersComponent },
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found !!! :)'} },
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
