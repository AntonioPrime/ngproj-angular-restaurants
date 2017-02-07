import {Component, OnInit} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {User} from "../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'main-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavBarComponent implements OnInit{
  loggedUser: User;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(user => this.loggedUser = user);
  }

  public logout(){
    this.router.navigate(['/app/restaurants']);
    this.authService.logout();
  }
}
