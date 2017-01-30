import {Injectable, OnInit} from "@angular/core";
import {User} from "../model/user";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Url} from "../url";
import {Observable, BehaviorSubject, Subject} from "rxjs";
import {UserStorageService} from "./user-storage.service";
import {Idle} from "@ng-idle/core";

@Injectable()
export class AuthService {
  private profileUrl = Url.getUrl('/profile');
  private loggedUser: Subject<User> = new BehaviorSubject<User>(null);

  private errorMessage: string;

  constructor(private http: Http, private userStorageService: UserStorageService, private idle: Idle) {
    let storageUser = this.getStorageUser();
    this.loggedUser.next(storageUser);
  }

  register() {
  }

  private getStorageUser(): User {
    return this.userStorageService.get();
  }

  public getProfile(): Subject<User> {
    return this.loggedUser;
  }

  public login(username: string, password: string): Observable<User> {
    let loggedUser: Observable<User> = this.http.get(this.profileUrl, this.getOptions(username, password)).map(res => res.json())
      .catch(e => {
        if (e.status === 401) {
          return Observable.throw('Unauthorized');
        }
      });
    loggedUser.subscribe(user => {
      this.userStorageService.save(user, password, 1);
      // this.loggedUser.next(user);
    });
    return loggedUser;
  }

  public logout() {
    this.loggedUser.next(null);
    this.userStorageService.clear();
  }

  private getOptions(username: string, password: string): RequestOptions {
    let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    return new RequestOptions({headers: headers});
  }
}
