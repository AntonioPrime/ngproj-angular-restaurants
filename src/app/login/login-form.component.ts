import {Component} from "@angular/core";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'login-form',
  templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent {

  constructor(private authService: AuthService) {
  }

  public login() {
    this.authService.login('admin@gmail.com', 'admin');
  }

  public logout(){
    this.authService.logout();
  }
}
