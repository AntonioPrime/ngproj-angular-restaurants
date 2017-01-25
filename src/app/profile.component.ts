import {Component, OnInit} from "@angular/core";
import {AuthService} from "./service/auth.service";
import {User} from "./model/user";

@Component({
  selector:'user-profile',
  templateUrl: 'app/profile.component.html'
})
export class ProfileComponent implements OnInit{
  loggedUser: User;
  errorMessage: string;

  constructor(private authService: AuthService) {
    this.loggedUser = new User();
  }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(user => this.loggedUser = user, error => this.errorMessage = error);
  }
}
