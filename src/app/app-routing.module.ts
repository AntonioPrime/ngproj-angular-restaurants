import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginFormComponent} from "./login/login-form.component";
import {AuthGuard} from "./service/auth-guard.service";
import {RestaurantDetailComponent} from "./restaurant-detail/restaurant-detail.component";

const routes: Routes = [
  {
    path: 'app/restaurants',
    component: RestaurantsComponent,
    children: [
      {
        path: ':name',
        component: RestaurantDetailComponent
      }
    ]
  },
  {
    path: 'app/profile',
    canActivate: [AuthGuard],
    component: ProfileComponent
  },
  {
    path: 'app/login',
    component: LoginFormComponent
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
