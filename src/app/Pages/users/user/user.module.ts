import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { EditUserModule } from '../edit-user.component.ts/edit-user.module';
import { UserService } from '../user.sevice';

@NgModule({
  imports: [CommonModule, RouterModule, EditUserModule],
  exports: [UserComponent],
  declarations: [UserComponent],
  providers: [UserService],
})
export class UserModule { }
