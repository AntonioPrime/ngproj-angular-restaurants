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
    return this.getCredentials().user;
  }

  public getPassword(): string {
    return this.getCredentials().pass;
  }

  public clear() {
    sessionStorage.removeItem('us');
  }

  private getCredentials(): any {
    let userStorage = sessionStorage.getItem('us');
    if (userStorage === null || userStorage === undefined) {
      return null;
    }
    return JSON.parse(userStorage);
  }
}
