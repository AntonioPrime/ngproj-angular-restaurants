import {Injectable} from "@angular/core";
import {User} from "../model/user";

@Injectable()
export class UserStorageService {

  public save(user: User, pass: string) {
    let userStorage = {
      user: user,
      pass: pass,
    };
    sessionStorage.setItem('us', JSON.stringify(userStorage));
  };

  public getUser(): User {
    let userStorage = sessionStorage.getItem('us');
    if (userStorage === null || userStorage === undefined) {
      return null;
    }
    let userStorageObj = JSON.parse(userStorage);
    return userStorageObj.user;
  }

  public clear() {
    sessionStorage.removeItem('us');
  }
}
