import {Injectable, OnInit} from "@angular/core";
import {User} from "../model/user";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Url} from "../url";
import {Observable, BehaviorSubject, Subject} from "rxjs";

@Injectable()
export class AuthService {
  private loggedUser: Observable<User>;
  private profileUrl = Url.getUrl('/profile');
  private loggedUserSubject: Subject<User> = new BehaviorSubject<User>(null);

  private errorMessage: string;

  constructor(private http: Http) {
    let localStorageUser = localStorage['user'];
    let localStorageUser1 = localStorageUser ? JSON.parse(localStorageUser) : null;
    this.loggedUserSubject.next(localStorageUser1);
  }

  register() {

  }

  public getProfile(): Subject<User> {
    return this.loggedUserSubject;
  }

  public login(username: string, password: string): Observable<User> {
    this.loggedUser = this.http.get(this.profileUrl, this.getOptions(username, password)).map(res => res.json())
      .catch(e => {
        return Observable.throw('Unauthorized');
      });
    this.loggedUser.subscribe(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.loggedUserSubject.next(user);
    });
    return this.loggedUser;
  }

  public logout() {
    this.loggedUser = Observable.of(null);
    this.loggedUserSubject.next(null);
    localStorage.removeItem('user');
  }

  getOptions(username: string, password: string): RequestOptions {
    let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    return new RequestOptions({headers: headers});
  }
}
