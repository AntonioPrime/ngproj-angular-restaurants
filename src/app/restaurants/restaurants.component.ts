import {Restaurant} from "../model/restaurant";
import {RestaurantsService} from "../service/restaurants.service";
import {OnInit, Component} from "@angular/core";

@Component({
  selector: 'my-restaurants',
  templateUrl:'app/restaurants/restaurants.component.html'
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
}
