import {Component, OnInit} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'login-form',
  templateUrl: 'app/login/login-form.component.html',
  styleUrls: ['app/login/login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  error: string;
  isRegister: boolean;
  isProduction: boolean = environment.production;

  public credentials = {name: '', email: '', password: ''};

  constructor(private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.authService.error.subscribe(error => this.error = error);
    this.route.queryParams.subscribe(params => this.isRegister = params['register']);
  }

  public login() {
    if (this.isRegister) {
      this.authService.register(this.credentials);
    }
    else {
      this.authService.login(this.credentials.email, this.credentials.password);
    }
  }

  //FOR DEVELOPING TESTING ONLY
  public defaultLogin(email: string, password: string) {
    if (this.isProduction==false) {
      this.credentials.email = email;
      this.credentials.password = password;
      this.login();
    }
  }
}
