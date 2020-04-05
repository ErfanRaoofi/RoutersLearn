import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { EditUserModule } from './edit-user.component.ts/edit-user.module';

@NgModule({
  imports: [CommonModule,  EditUserModule],
  exports: [UsersComponent],
  declarations: [UsersComponent,],
  providers: [],
})
export class UsersModule { }
