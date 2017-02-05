import {Component, OnInit} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {User} from "../model/user";


@Component({
  selector: 'login',
  templateUrl: 'app/profile/profile.component.html'
})
export class ProfileComponent implements OnInit {
  loggedUser: User;
  display: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(user => this.loggedUser = user);
  }

  showDialog() {
    this.display = true;
  }

  deleteSelf(): void {
    this.display = false;
    this.authService.deleteProfile();
  }
}
