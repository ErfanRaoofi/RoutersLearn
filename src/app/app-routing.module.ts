import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { UsersComponent } from './Pages/users/users.component';
import { AccountsComponent } from './Pages/acoounts/accounts.component';
import { UserComponent } from './Pages/users/user/user.component';
import { EditAccountComponent } from './Pages/acoounts/edit-account/edit-account.component';
import { EditUserComponent } from './Pages/users/edit-user.component.ts/edit-user.component';
import { NotFound404Component } from './Pages/notfound-404/notfound-404.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id', component: UserComponent},
    {path: ':id/edit', component: EditUserComponent},
    // {path: 'users/:id/:name', component: UserComponent},
  ]},
  {path: 'accounts', component: AccountsComponent},
  {path: 'accounts/:id/edit', component: EditAccountComponent},
  {path: 'not-found', component: NotFound404Component},
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
