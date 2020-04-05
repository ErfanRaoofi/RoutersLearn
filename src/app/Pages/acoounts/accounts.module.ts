import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsComponent } from './accounts.component';

@NgModule({
  imports: [CommonModule],
  exports: [AccountsComponent],
  declarations: [AccountsComponent],
  providers: [],
})
export class AccountsModule { }
