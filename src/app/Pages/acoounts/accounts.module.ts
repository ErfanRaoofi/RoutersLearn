import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AccountsComponent } from './accounts.component';
import { EditAccountModule } from './edit-account/edit-account.module';

@NgModule({
  imports: [CommonModule, RouterModule, EditAccountModule],
  exports: [AccountsComponent],
  declarations: [AccountsComponent],
  providers: [],
})
export class AccountsModule { }
