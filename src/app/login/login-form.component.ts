import {Component, OnInit} from "@angular/core";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'login-form',
  templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent implements OnInit{
  isError: boolean;

  public credentials = {email: '', password: ''};

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.is401.subscribe(isError => this.isError = isError);
  }

  public login() {
    this.authService.login(this.credentials.email, this.credentials.password);
  }
}
