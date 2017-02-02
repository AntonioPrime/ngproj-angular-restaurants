import {Component, OnInit} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {ActivatedRoute, Params} from "@angular/router";
import {register} from "ts-node/dist";

@Component({
  selector: 'login-form',
  templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent implements OnInit{
  error: string;
  isRegister: boolean;

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
}
