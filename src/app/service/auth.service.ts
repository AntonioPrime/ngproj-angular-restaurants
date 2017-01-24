import {Injectable} from "@angular/core";
import {User} from "../model/user";

@Injectable()
export class AuthService {
  private loggedUser: User;

  register() {

  }

  getProfile(){
    // return this.loggedUser;
    return new User('asdasd', 'ddddd');
  }
}
