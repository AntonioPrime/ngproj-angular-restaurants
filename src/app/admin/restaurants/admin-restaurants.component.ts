import {Component, OnInit, ElementRef, ViewChild, NgZone} from "@angular/core";
import {AdminRestaurantsService} from "../service/admin-restaurants.service";
import {MapsAPILoader} from 'angular2-google-maps/core';
import {Restaurant} from "../../model/restaurant";
import {Location} from "../../model/location";
import {FormControl} from "@angular/forms";

@Component({
  templateUrl: 'admin-restaurants.component.html',
  styleUrls: [
    'admin-restaurants.component.css',
  ],
  selector: 'admin-resturants'
})
export class AdminRestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  restaurant: Restaurant;
  warning: string;

  private searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private adminRestaurantService: AdminRestaurantsService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
    this.restaurant = new Restaurant();
    this.restaurant.location = new Location();
  }

  ngOnInit(): void {
    this.getRestaurants();

    this.searchControl = new FormControl();
    this.mapsAPILoader.load().then(() => {
      console.log(this.searchElementRef.nativeElement);
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.restaurant.location.y = place.geometry.location.lat();
          this.restaurant.location.x = place.geometry.location.lng();
        });
      });
    });
  }

  private getRestaurants() {
    this.adminRestaurantService.getAll().subscribe(restaurants => {
      this.restaurants = restaurants;
    })
  }

  createNew() {
    console.log(this.restaurant);
    this.adminRestaurantService.save(this.restaurant)
      .subscribe(restaurant => {
        this.restaurants.push(restaurant);
        document.getElementById("closeButton").click();
        this.warning = null;
      },
      error => {
        this.warning = error;
      });
  }
}
