import {Component, OnInit} from "@angular/core";
import {RestaurantsService} from "../service/restaurants.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Restaurant} from "../model/restaurant";

@Component({
  templateUrl: 'app/restaurant-detail/restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit{
  restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.restaurantsService.get(params['name'])).subscribe(restaurant => this.restaurant = restaurant);
  }
}
