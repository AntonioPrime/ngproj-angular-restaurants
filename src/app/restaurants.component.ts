import {Restaurant} from "./model/restaurant";
import {RestaurantsService} from "./service/restaurants.service";
import {OnInit, Component} from "@angular/core";

@Component({
  selector: 'my-restaurants',
  templateUrl:'app/restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantsService) {
  }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }
}
