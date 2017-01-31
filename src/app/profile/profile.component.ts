import {Component, OnInit} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {User} from "../model/user";


@Component({
  selector: 'login',
  templateUrl: 'app/profile/profile.component.html'
})
export class ProfileComponent implements OnInit{
  ngOnInit(): void {
     this.authService.getProfile().subscribe(user => this.loggedUser = user);
  }

  loggedUser: User;
  errorMessage: string;

  constructor(private authService: AuthService) {
  }

  public login() {
    this.authService.login('admin@gmail.com', 'admin').subscribe(user => {
      this.loggedUser = user;
    }, error => {
      this.errorMessage = error;
    });
  }

  public logout(){
    this.authService.logout();
    this.loggedUser=null;
  }
}
