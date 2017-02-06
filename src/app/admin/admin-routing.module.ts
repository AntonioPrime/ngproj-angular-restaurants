import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AdminRestaurantDetailComponent} from "./admin-restaurant-detail/admin-restaurant-detail.component";
import {AdminAuthGuard} from "../service/admin-auth-guard";

const routes: Routes = [
  {
    path: 'restaurants',
    component: AdminComponent,
    canActivate: [AdminAuthGuard],
    canActivateChild: [AdminAuthGuard],
    children: [
      {
        path: ':name',
        component: AdminRestaurantDetailComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
