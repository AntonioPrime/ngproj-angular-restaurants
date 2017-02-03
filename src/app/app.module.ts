import './rxjs-extensions.ts';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AirDatepicker} from 'angular2-air-datepicker';

import {AppComponent} from './app.component';
import {RestaurantsService} from "./service/restaurants.service";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {AuthService} from "./service/auth.service";
import {AppRoutingModule} from "./app-routing.module";
import {ProfileComponent} from "./profile/profile.component";
import {NavBarComponent} from "./navbar/navbar.component";
import {CredentialsStorageService} from "./service/credentials-storage.service";
import {LoginFormComponent} from "./login/login-form.component";
import {AuthGuard} from "./service/auth-guard.service";
import {RestaurantNamePipe} from "./pipe/restaurant-name.pipe";
import {RestaurantDetailComponent} from "./restaurant-detail/restaurant-detail.component";
import {BookingCreatorComponent} from "./booking/booking-creator.component";
import {BookingService} from "./service/booking.service";
import {MenuComponent} from "./menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ProfileComponent,
    NavBarComponent,
    LoginFormComponent,
    RestaurantNamePipe,
    AirDatepicker,
    BookingCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    RestaurantsService,
    CredentialsStorageService,
    AuthService,
    BookingService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
