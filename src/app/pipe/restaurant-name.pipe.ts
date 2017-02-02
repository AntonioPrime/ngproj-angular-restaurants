import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name: 'nameTransform'
})
export class RestaurantNamePipe implements PipeTransform {
  transform(restauranName: string): string {
    let str = restauranName.replace('_', ' ');
    return str.replace(/\w\S*/g, function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
}
