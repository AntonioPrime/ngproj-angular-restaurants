import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {ProfileComponent} from "./navbar/profile/profile.component";

const routes: Routes = [
  {
    path: 'app/restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'app/profile',
    component: ProfileComponent
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
