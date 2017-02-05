import './rxjs-extensions.ts';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

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
import {BookingsListComponent} from "./booking/bookings-list.component";
import {CalendarModule, DataScrollerModule, SharedModule, DialogModule} from "primeng/primeng";

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
    BookingCreatorComponent,
    BookingsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CalendarModule,
    DataScrollerModule,
    DialogModule,
    SharedModule
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
