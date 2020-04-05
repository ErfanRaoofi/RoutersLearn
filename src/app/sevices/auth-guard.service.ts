import { LoginService } from "./login-service.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.loginService.isAuthenticated().then((auth: boolean) => {
      if (auth) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    });
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
      }
}
