import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminRestaurantsComponent} from "./restaurants/admin-restaurants.component";

const routes: Routes = [
  {
    path: '',
    component: AdminRestaurantsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
