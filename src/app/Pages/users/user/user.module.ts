import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [UserComponent],
  declarations: [UserComponent],
  providers: [],
})
export class UserModule { }
