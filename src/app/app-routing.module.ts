import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { UsersComponent } from './Pages/users/users.component';
import { AccountsComponent } from './Pages/acoounts/accounts.component';
import { UserComponent } from './Pages/users/user/user.component';
import { EditAccountComponent } from './Pages/acoounts/edit-account/edit-account.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserComponent},
  // {path: 'users/:id/:name', component: UserComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'accounts/:id/edit', component: EditAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
