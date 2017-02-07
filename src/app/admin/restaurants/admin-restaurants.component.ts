import {Component, OnInit} from "@angular/core";
import {AdminRestaurantsService} from "../service/admin-restaurants.service";
import {Restaurant} from "../../model/restaurant";
@Component({
  templateUrl: 'admin-restaurants.component.html',
  styleUrls: [
    'admin-restaurants.component.css',
  ],
  selector: 'admin-resturants'
})
export class AdminRestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  display: boolean;
  restaurant: Restaurant;

  constructor(private adminRestaurantService: AdminRestaurantsService) {
    this.restaurant = new Restaurant();
  }

  ngOnInit(): void {
    this.getRestaurants();
  }

  private getRestaurants() {
    this.adminRestaurantService.getAll().subscribe(restaurants => {
      this.restaurants = restaurants;
    })
  }

  showDialog() {
    this.display = true;
  }

  createNew() {
    console.log(this.restaurant);
    this.display = false;
  }
}
