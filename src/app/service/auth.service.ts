import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Url} from "../url";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  private loggedUser: User;
  private profileUrl = Url.getUrl('/profile');

  constructor(private http: Http) {
  }

  register() {

  }

  getProfile(): Observable<User>{
    return this.http.get(this.profileUrl, this.getOptions("admin@gmail.com", "admin")).map(res => res.json());
  }

  login(){

  }

  private getOptions(username: string, password: string): RequestOptions {
    let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    return new RequestOptions({headers: headers});
  }
}
