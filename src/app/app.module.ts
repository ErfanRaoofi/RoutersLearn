import { LoginService } from './sevices/login-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './Pages/pages.module';
import { UserService } from './Pages/users/user.sevice';
import { AuthGuard } from './sevices/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule
  ],
  providers: [UserService, AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
