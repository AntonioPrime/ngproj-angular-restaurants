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
  redirectUrl: string;
  is401: Subject<boolean> = new BehaviorSubject<boolean>(false);
  private loggedUser: Subject<User> = new BehaviorSubject<User>(null);

  constructor(private http: Http, private userStorageService: CredentialsStorageService, private router: Router) {
    let storageUser = this.getStorageUser();
    this.loggedUser.next(storageUser);
  }

  register() {
  }

  private getStorageUser(): User {
    return this.userStorageService.getUser();
  }

  public getProfile(): Subject<User> {
    return this.loggedUser;
  }

  public login(username: string, password: string) {
    this.http.get(this.profileUrl, this.getOptions(username, password)).map(res => res.json())
      .catch(e => {
        if (e.status === 401) {
          return Observable.throw('Unauthorized');
        }
      }).subscribe(user => {
      this.userStorageService.save(user, password);
      this.loggedUser.next(user);
      this.is401.next(false);
      let redirect = this.redirectUrl ? this.redirectUrl : '/app/profile';
      this.router.navigate([redirect]);
    }, (err) => {
      this.is401.next(true);
      }
    );
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
