import {Component, OnInit} from "@angular/core";
import {AdminRestaurantsService} from "../service/admin-restaurants.service";
import {Restaurant} from "../../model/restaurant";
@Component({
  templateUrl: 'app/admin/restaurants/admin-restaurants.component.html',
  styleUrls: ['app/admin/restaurants/admin-restaurants.component.css'],
  selector: 'admin-resturants'
})
export class AdminRestaurantsComponent implements OnInit{
  restaurants: Restaurant[];

  constructor(private adminRestaurantService: AdminRestaurantsService) {
  }

  ngOnInit(): void {
    this.getRestaurants();
  }

  private getRestaurants() {
    this.adminRestaurantService.getAll().subscribe(restaurants => {
      this.restaurants = restaurants;
    })
  }

}
