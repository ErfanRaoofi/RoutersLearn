import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { EditUserModule } from './edit-user.component.ts/edit-user.module';
import { UserService } from './user.sevice';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,  EditUserModule, RouterModule],
  exports: [UsersComponent],
  declarations: [UsersComponent,],
  providers: [UserService],
})
export class UsersModule { }
