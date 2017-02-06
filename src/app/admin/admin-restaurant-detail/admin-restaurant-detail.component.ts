import {Component, OnInit} from "@angular/core";
import {AdminRestaurantsService} from "../service/admin-restaurants.service";
import {Restaurant} from "../../model/restaurant";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  templateUrl: 'app/admin/admin-restaurant-detail/admin-restaurant-detail.component.html'
})
export class AdminRestaurantDetailComponent implements OnInit{
  restaurant: Restaurant;

  constructor(private adminRestaurantsService: AdminRestaurantsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.adminRestaurantsService.get(params['name'])).subscribe(restaurant => this.restaurant = restaurant);
  }
}
