import {Restaurant} from "../model/restaurant";
import {RestaurantsService} from "../service/restaurants.service";
import {OnInit, Component} from "@angular/core";
import {Subject} from "rxjs";

@Component({
  selector: 'my-restaurants',
  templateUrl: 'app/restaurants/restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurantsCached: Restaurant[];
  errorMessage: string;
  restaurants: Subject<Restaurant[]> = new Subject<Restaurant[]>();

  constructor(private restaurantService: RestaurantsService) {
  }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(restaurants => {
      this.restaurantsCached = restaurants;
      this.restaurants.next(restaurants)
    }, error => this.errorMessage = error);
  }

  search(name: string) {
    let value = this.restaurantsCached.filter(function (res) {
      return res.name.match(name.replace(' ', '_').toLowerCase());
    });
    this.restaurants.next(value);
  }

  isClosed(restaurant: Restaurant): any {
    let now = Date.now();
    let nowDate = new Date().toISOString().substr(0, 11);
    let afterOpening = Date.parse(nowDate + restaurant.openTime) <= now;
    let beforeClosing = Date.parse(nowDate + restaurant.closeTime) > now;
    let inTime = afterOpening && beforeClosing;
    return {
      'glyphicon': true,
      'glyphicon-bookmark': true,
      'pull-right': true,
      'green': inTime,
      'red': !inTime
    };
  }
}
