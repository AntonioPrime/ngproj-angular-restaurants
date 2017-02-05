import {NgModule} from "@angular/core";
import {RestaurantNamePipe} from "./restaurant-name.pipe";
@NgModule({
  declarations: [
    RestaurantNamePipe
  ],
  exports: [
    RestaurantNamePipe
  ]
})
export class PipeModule {

}
