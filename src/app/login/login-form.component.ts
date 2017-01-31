import {Component} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login-form',
  templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent {

  public credentials = {email: '', password: ''};

  constructor(private authService: AuthService, private router: Router) {
  }

  public login() {
    this.authService.login(this.credentials.email, this.credentials.password);
    this.router.navigate(['/app/profile']);
  }
}
