import { LoginService } from './../../sevices/login-service.service';
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService) {}

  ngOnInit() {}

  OpenUsers() {
    this.router.navigateByUrl('/users');
  }

  OpenAcoounts() {
    this.router.navigate(['/accounts'], {relativeTo: this.route});
  }

  onLogin() {
    this.loginService.login();
  }

  onLogout() {
    this.loginService.logout();
  }
}
