import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginFormComponent} from "./login/login-form.component";
import {AuthGuard} from "./service/auth-guard.service";
import {RestaurantDetailComponent} from "./restaurant-detail/restaurant-detail.component";
import {BookingsListComponent} from "./booking/bookings-list.component";

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
    component: ProfileComponent,
    children: [
      {
        path: 'bookings',
        component: BookingsListComponent,
        canActivate: [AuthGuard],
      }
    ]
  },
  {
    path: 'app/login',
    component: LoginFormComponent
  },
  {
    path: 'app/login/',
    component: LoginFormComponent
  },
  {
    path: 'app/admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
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
export class AppRoutingModule {
}
