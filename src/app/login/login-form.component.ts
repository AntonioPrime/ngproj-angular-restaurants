import {Component, OnInit, Input, trigger, state, animate, transition, style, keyframes} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'login-form',
  templateUrl: 'app/login/login-form.component.html',
  styleUrls: ['app/login/login-form.component.css'],
  animations: [
    trigger('test', [
      state('show', style({
        display: 'block'
      })),
      state('hide', style({
        display: 'none'
      })),
      transition('hide => show', [
        animate(1000, keyframes([
          style({opacity: 0, height: 0, transform: 'translateY(-1%)', offset: 0}),
          style({opacity: 1, height: '*',transform: 'translateY(0px)',  offset: 0.5})
        ]))
      ]),
      transition('show => hide', [
        animate(1000, keyframes([
          style({opacity: 1, height: '*', transform: 'translateY(-1%)', offset: 0}),
          style({opacity: 0, height: 0, transform: 'translateY(0px)',  offset: 0.5})
        ]))
      ]),
    ])
  ]
})
export class LoginFormComponent implements OnInit{
  error: string;
  isRegister: boolean;
  isProduction: boolean = environment.production;
  loginShow: string = 'show';
  registerShow: string = 'hide';

  public credentials = {name: '', email: '', password: ''};

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.error.subscribe(error => this.error = error);
    this.route.queryParams.subscribe(params => {
      this.isRegister = params['register'];
      if (this.isRegister) {
        this.loginShow = 'hide';
        this.registerShow = 'show';
      }
      else {
        this.loginShow = 'show';
        this.registerShow = 'hide';
      }
    });
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

  private toggleState(): void {
    if (this.loginShow=='show') {
      this.loginShow='hide';
      this.registerShow='show';
      this.router.navigate(['/app/login/'], {queryParams: {register: true}});
    }
    else {
      this.loginShow='show';
      this.registerShow='hide';
      this.router.navigate(['/app/login/']);
    }
  }
}
