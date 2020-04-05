import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EditAccountComponent } from './edit-account.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [EditAccountComponent],
  declarations: [EditAccountComponent],
  providers: [],
})
export class EditAccountModule { }
