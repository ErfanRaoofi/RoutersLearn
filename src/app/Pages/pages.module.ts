import { UsersModule } from './users/users.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AccountsModule } from './acoounts/accounts.module';
import { EditUserModule } from './users/edit-user.component.ts/edit-user.module';
import { UserModule } from './users/user/user.module';


const MODULES = [
  HomeModule,
  UsersModule,
  AccountsModule,
  EditUserModule,
  UserModule

]
@NgModule({
  imports: [CommonModule, ...MODULES],
  exports: [],
  declarations: [],
  providers: [],
})
export class PageModule { }
