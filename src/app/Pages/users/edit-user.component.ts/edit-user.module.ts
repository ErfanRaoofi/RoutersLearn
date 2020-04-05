import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EditUserComponent } from './edit-user.component';
import { UserService } from '../user.sevice';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [EditUserComponent],
  declarations: [EditUserComponent],
  providers: [UserService],
})
export class EditUserModule { }
