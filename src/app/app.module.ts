import './rxjs-extensions.ts';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RestaurantsService} from "./service/restaurants.service";
import {RestaurantsComponent} from "./restaurants.component";
import {AuthService} from "./service/auth.service";
import {ProfileComponent} from "./profile.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    RestaurantsService,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
