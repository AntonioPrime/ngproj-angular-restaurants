import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Url} from "../../url";
import {AuthService} from "../../service/auth.service";
import {Observable, Subject} from "rxjs";
import {Restaurant} from "../../model/restaurant";
import {RestaurantsService} from "../../service/restaurants.service";

@Injectable()
export class AdminRestaurantsService {
  private adminRestaurantsUrl = Url.getUrl("/admin/restaurants ");
  private restaurants: Subject<Restaurant[]> = new Subject<Restaurant[]>();

  constructor(private http: Http, private authService: AuthService, private restaurantService: RestaurantsService) {
  }

  getAll(): Subject<Restaurant[]> {
    this.http.get(this.adminRestaurantsUrl, this.authService.getStorageOptions()).map(res => res.json()).subscribe(restaurants => this.restaurants.next(restaurants));
    return this.restaurants;
  }

  get(param: any): Observable<Restaurant> {
    return this.restaurantService.get(param);
  }

  save(restaurant: Restaurant) {
    return this.http.post(this.adminRestaurantsUrl, JSON.stringify(restaurant), this.authService.getStorageOptions())
      .map(res => res.json())
      .catch(ex => {
        let s: string = ex.json().details[0];
        if (s.match("duplicate key error")) {
          return Observable.throw('This restaurant name already exists');
        }
        return Observable.throw(s);
      });
  }
}