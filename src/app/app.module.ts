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

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    ProfileComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    RestaurantsService,
    CredentialsStorageService,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
