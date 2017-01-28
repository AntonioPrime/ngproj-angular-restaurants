import {Component, OnInit} from "@angular/core";
import {AuthService} from "./service/auth.service";
import {User} from "./model/user";


@Component({
  selector: 'login',
  templateUrl: 'app/account.component.html'
})
export class AccountComponent implements OnInit {
  ngOnInit(): void {
    let localStorageUser = localStorage['user'];
    this.loggedUser = localStorageUser ? JSON.parse(localStorageUser) : null;
  }

  loggedUser: User;
  errorMessage: string;

  constructor(private authService: AuthService) {
  }

  public login() {
    this.authService.login('admin@gmail.com', 'admin').subscribe(user => {
      this.loggedUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedUser));
    }, error => {
      this.errorMessage = error;
    });
  }

  public logout() {
    this.authService.logout();
    this.loggedUser = null;
    localStorage.removeItem('user');
  }
}
