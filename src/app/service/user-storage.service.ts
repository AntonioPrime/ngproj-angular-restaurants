import {Injectable} from "@angular/core";
import {User} from "../model/user";

@Injectable()
export class UserStorageService {

  public save(user: User, pass: string, expiresInMinutes: number) {
    if (expiresInMinutes === null || expiresInMinutes === undefined) {
      expiresInMinutes = (24 * 60 * 60 * 1000);
    }
    let now = Date.now();
    let userStorage = {
      user: user,
      pass: pass,
      expiresIn: now + expiresInMinutes * 1000 * 60
    };
    sessionStorage.setItem('us', JSON.stringify(userStorage));
  };

  public get(): User {
    let userStorage = sessionStorage.getItem('us');
    if (userStorage === null || userStorage === undefined) {
      return null;
    }
    let now = Date.now();
    let userStorageObj = JSON.parse(userStorage);
    let expiresIn = userStorageObj.expiresIn;
    if (expiresIn < now) {
      return null;
    }
    return userStorageObj.user;
  }

  public clear(){
    sessionStorage.removeItem('us');
  }
}
