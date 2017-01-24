import {Component} from "@angular/core";
import {AuthService} from "./service/auth.service";
import {User} from "./model/user";

@Component({
  selector:'user-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  private loggedUser: User;
  constructor(authService: AuthService) {
    this.loggedUser = authService.getProfile();
  }
}
