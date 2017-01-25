import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RestaurantsComponent} from "./restaurants.component";
import {LoginComponent} from "./login.component";

const routes: Routes = [
  {
    path: 'app/restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'app/login',
    component: LoginComponent
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
