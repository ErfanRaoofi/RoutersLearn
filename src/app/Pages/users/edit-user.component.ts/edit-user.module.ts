import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EditUserComponent } from './edit-user.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [EditUserComponent],
  declarations: [EditUserComponent],
  providers: [],
})
export class EditUserModule { }
