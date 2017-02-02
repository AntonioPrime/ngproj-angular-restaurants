import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return this.checkLogin(state.url);
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  checkLogin(url: string): Observable<boolean> {
    return this.authService.getProfile().map(user => {
      if (user) {
        return true;
      }
      this.authService.redirectUrl = url;
      this.router.navigateByUrl('/app/login');
      return false;
    }).first();
  }
}
