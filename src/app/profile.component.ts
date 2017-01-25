import {Component, OnInit} from "@angular/core";
import {AuthService} from "./service/auth.service";
import {User} from "./model/user";

@Component({
  selector:'user-profile',
  templateUrl: 'app/profile.component.html'
})
export class ProfileComponent {
  loggedUser: User;
  errorMessage: string;

  constructor(private authService: AuthService) {
  }

  public login() {
    this.authService.login('admin@gmail.com', 'admin');
    this.authService.getProfile().subscribe(user => this.loggedUser = user, error => this.errorMessage = error);
  }
}
