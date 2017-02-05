import {Component, Input} from "@angular/core";
import {BookingService} from "../service/booking.service";
import {Booking} from "../model/booking";
import {Restaurant} from "../model/restaurant";

@Component({
  templateUrl: 'app/booking/booking-creator.component.html',
  selector: 'booking-creator'
})
export class BookingCreatorComponent {
  booking: Booking;
  dateTime: Date;
  minDate: Date = new Date();
  maxDate: Date = new Date();
  buttonBlocked: boolean;
  error: string;
  display: boolean;
  @Input() restaurant: Restaurant;

  constructor(private bookingService: BookingService) {
    this.maxDate.setFullYear(this.minDate.getFullYear() + 1);
  }

  book() {
    this.display = false;
    let date = this.dateTime.toISOString().substr(0, 10);
    let time = this.dateTime.toTimeString().substr(0, 5);
    this.dateTime = null;
    this.bookingService.book(new Booking(date, time, this.restaurant.name))
      .subscribe(booking => {
        this.error = null;
        this.booking = booking;
        setTimeout(() => {
          this.booking = null
        }, 3000);
      }, err => {
        this.booking = null;
        this.error = err;
        setTimeout(() => {
          this.error = null
        }, 3000);
      });
  }

  showDialog() {
    this.display = true;
  }
}
