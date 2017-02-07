import {Component, Input} from "@angular/core";
import {Food} from "../model/food";
@Component({
  templateUrl: 'menu.component.html',
  selector: 'restaurant-menu'
})
export class MenuComponent {
  @Input() menu: Food[];
}
