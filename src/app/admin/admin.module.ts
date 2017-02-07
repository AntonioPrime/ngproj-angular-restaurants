import {NgModule} from "@angular/core";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminRestaurantsComponent} from "./restaurants/admin-restaurants.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AdminComponent} from "./admin.component";
import {AdminRestaurantsService} from "./service/admin-restaurants.service";
import {HttpModule} from "@angular/http";
import {PipeModule} from "../pipe/pipe.module";
import {AdminRestaurantDetailComponent} from "./admin-restaurant-detail/admin-restaurant-detail.component";
import {SharedModule, DialogModule} from "primeng/primeng";
import {CalendarModule} from "primeng/components/calendar/calendar";
import {InputMaskModule} from "primeng/components/inputmask/inputmask";

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule,
    PipeModule,
    DialogModule,
    SharedModule,
    CalendarModule,
    InputMaskModule
  ],
  declarations: [
    AdminComponent,
    AdminRestaurantsComponent,
    AdminRestaurantDetailComponent
  ],
  providers: [
    AdminRestaurantsService
  ]
})
export class AdminModule {
}
