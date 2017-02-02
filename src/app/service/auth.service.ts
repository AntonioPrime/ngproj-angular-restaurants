import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Url} from "../url";
import {Observable, BehaviorSubject, Subject} from "rxjs";
import {CredentialsStorageService} from "./credentials-storage.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  private profileUrl = Url.getUrl('/profile');
  private registerUrl = Url.getUrl('/register');
  redirectUrl: string;
  error: Subject<string> = new BehaviorSubject<string>(null);
  private loggedUser: Subject<User> = new BehaviorSubject<User>(null);

  constructor(private http: Http, private userStorageService: CredentialsStorageService, private router: Router) {
    let storageUser = this.getStorageUser();
    this.loggedUser.next(storageUser);
  }

  register(credentials) {
    this.http.post(this.registerUrl, JSON.stringify(credentials), this.getRegisterOptions()).map(res => res.json())
      .catch(e => {
        if (e.status === 409) {
          return Observable.throw('Email already exists');
        }
      }).subscribe(user => this.login(user.email, credentials.password), err => this.error.next(err));
  }

  private getStorageUser(): User {
    return this.userStorageService.getUser();
  }

  private getStoragePass(): string {
    return this.userStorageService.getPassword();
  }

  public getProfile(): Subject<User> {
    return this.loggedUser;
  }

  public login(username: string, password: string) {
    this.http.get(this.profileUrl, this.getOptions(username, password)).map(res => res.json())
      .catch(e => {
        if (e.status === 401) {
          return Observable.throw('Wrong Credentials');
        }
      }).subscribe(user => {
        this.userStorageService.save(user, password);
        this.loggedUser.next(user);
        this.error.next(null);
        let redirect = this.redirectUrl ? this.redirectUrl : '/app/profile';
        this.router.navigate([redirect]);
      }, (err) => {
        this.error.next(err);
      }
    );
  }

  public logout() {
    this.router.navigate(['/app/restaurants']);
    this.loggedUser.next(null);
    this.userStorageService.clear();
  }

  public deleteProfile(username: string) {
    this.http.delete(`${this.profileUrl}`, this.getOptions(username, this.getStoragePass())).subscribe((res) => {});
    this.logout();
  }

  private getOptions(username: string, password: string): RequestOptions {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    return new RequestOptions({headers: headers});
  }

  private getRegisterOptions(): RequestOptions {
    let headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers: headers});
  }
}
