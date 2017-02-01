import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name: 'nameTransform'
})
export class RestaurantNamePipe implements PipeTransform {
  transform(restauranName: string): string {
    let s = restauranName.replace('_', ' ');
    return s.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
