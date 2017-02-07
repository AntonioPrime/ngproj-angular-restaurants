import {Component, OnInit} from "@angular/core";
import {RestaurantsService} from "../service/restaurants.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Restaurant} from "../model/restaurant";
import {User} from "../model/user";
import {AuthService} from "../service/auth.service";

@Component({
  templateUrl: 'restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit{
  restaurant: Restaurant;
  loggedUser: User;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.restaurantsService.get(params['name'])).subscribe(restaurant => this.restaurant = restaurant);
    this.authService.getProfile().subscribe(user => this.loggedUser = user);
  }
}
