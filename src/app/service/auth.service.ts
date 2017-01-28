import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Url} from "../url";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  private loggedUser: Observable<User>;
  private profileUrl = Url.getUrl('/profile');
  private errorMessage: string;

  constructor(private http: Http) {
  }

  register() {

  }

  public getProfile(): Observable<User>{
    return this.loggedUser;
  }

  public login(username: string, password: string): Observable<User>{
    return this.http.get(this.profileUrl, this.getOptions(username, password)).map(res => res.json())
      .catch(e => {return Observable.throw('Unauthorized');});
  }

  public logout(){
    this.loggedUser = Observable.of(null);
  }

  getOptions(username: string, password: string): RequestOptions {
    let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    return new RequestOptions({headers: headers});
  }
}
