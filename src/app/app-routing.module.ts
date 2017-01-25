import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RestaurantsComponent} from "./restaurants.component";

const routes: Routes = [
  {
    path: 'app/restaurants',
    component: RestaurantsComponent
  },
  {
    path: '',
    redirectTo: '/app/restaurants',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
