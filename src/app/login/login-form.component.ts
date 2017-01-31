import {Component, OnInit} from "@angular/core";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'login-form',
  templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent implements OnInit{
  errorMessage: string;

  public credentials = {email: '', password: ''};

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.authError.subscribe(error => this.errorMessage = error);
  }

  public login() {
    this.authService.login(this.credentials.email, this.credentials.password);
  }
}
