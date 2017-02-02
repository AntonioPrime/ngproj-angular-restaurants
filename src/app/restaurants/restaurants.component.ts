import {Restaurant} from "../model/restaurant";
import {RestaurantsService} from "../service/restaurants.service";
import {OnInit, Component} from "@angular/core";
import {Subject} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'my-restaurants',
  templateUrl: 'app/restaurants/restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurantsCached: Restaurant[];
  errorMessage: string;
  restaurants: Subject<Restaurant[]> = new Subject<Restaurant[]>();

  constructor(private restaurantService: RestaurantsService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getAll().subscribe(restaurants => {
      this.restaurantsCached = restaurants;
      this.restaurants.next(restaurants)
    }, error => this.errorMessage = error);
  }

  toDetail(name: string) {
    this.router.navigate([name], {relativeTo: this.route});
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
