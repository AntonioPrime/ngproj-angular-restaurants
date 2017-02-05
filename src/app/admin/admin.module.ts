import {NgModule} from "@angular/core";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminRestaurantsComponent} from "./restaurants/admin-restaurants.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [AdminRestaurantsComponent]
})
export class AdminModule {

}
