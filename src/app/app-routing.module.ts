import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RestaurantsComponent} from "./restaurants.component";
import {AccountComponent} from "./account.component";

const routes: Routes = [
  {
    path: 'app/restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'app/login',
    component: AccountComponent
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
