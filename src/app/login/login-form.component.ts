import {Component} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login-form',
  templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent {

  private credentials = {};

  constructor(private authService: AuthService, private router: Router) {
  }

  public login() {
    this.authService.login('admin@gmail.com', 'admin');
    this.router.navigate(['/app/profile']);
  }
}
