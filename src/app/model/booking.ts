export class Booking {
  userEmail: string;
  date: string;
  time: string;
  restaurantName: string;

  constructor(date: string, time: string, restaurantName: string) {
    this.date = date;
    this.time = time;
    this.restaurantName = restaurantName;
  }
}
