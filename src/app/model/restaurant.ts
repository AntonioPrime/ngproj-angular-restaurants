import {Location} from "./location";
import {Food} from "./food";

export class Restaurant {
  name: string;
  location: Location;
  openTime: string;
  closeTime: string;
  menu: Food[];
}
