import {Component, OnInit} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {User} from "../model/user";

@Component({
  selector: 'main-navbar',
  templateUrl: 'app/navbar/navbar.component.html'
})
export class NavBarComponent implements OnInit{
  loggedUser: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(user => this.loggedUser = user);
  }

}
