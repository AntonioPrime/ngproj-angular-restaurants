import './rxjs-extensions.ts';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RestaurantsService} from "./service/restaurants.service";
import {RestaurantsComponent} from "./restaurants.component";
import {NavbarComponent} from "./navbar.component";
import {LoginComponent} from "./login.component";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RestaurantsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
