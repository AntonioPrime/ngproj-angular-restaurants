import {Injectable} from "@angular/core";
import {Restaurant} from "../model/restaurant";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {Url} from "../url";

@Injectable()
export class RestaurantsService {
  private restaurantsUrl = Url.getUrl('/restaurants');

  constructor(private http: Http) {
  }

  getAll(): Observable<Restaurant[]> {
    return this.http.get(this.restaurantsUrl).map(res => res.json());
  }

  get(name: string): Observable<Restaurant> {
    return this.http.get(this.restaurantsUrl + '/' + name).map(res => res.json());
  }
}
