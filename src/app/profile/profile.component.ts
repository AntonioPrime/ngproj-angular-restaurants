import {Component, OnInit} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {User} from "../model/user";


@Component({
  selector: 'login',
  templateUrl: 'app/profile/profile.component.html'
})
export class ProfileComponent implements OnInit{
  loggedUser: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
     this.authService.getProfile().subscribe(user => this.loggedUser = user);
  }
}
