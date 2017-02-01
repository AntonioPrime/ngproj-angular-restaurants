import {Restaurant} from "../model/restaurant";
import {RestaurantsService} from "../service/restaurants.service";
import {OnInit, Component} from "@angular/core";

@Component({
  selector: 'my-restaurants',
  templateUrl: 'app/restaurants/restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  errorMessage: string;

  constructor(private restaurantService: RestaurantsService) {
  }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants, error => this.errorMessage = error);
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
