import {Injectable} from "@angular/core";
import {Restaurant} from "../model/restaurant";
import {RESTAURANTS} from "../model/mock-restaurants";
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class RestaurantsService {
  private restaurants: Observable<Restaurant[]>;
  private restaurantsUrl: string;

  constructor(private http: Http) {
    this.restaurantsUrl = 'http://localhost:8080/restaurants';
    this.restaurants = Observable.of(RESTAURANTS);
  }

  getRestaurants(): Observable<Restaurant[]> {
    this.restaurants = this.http.get(this.restaurantsUrl).map(res => res.json());
    return this.restaurants;
  }
}
