import {Component} from "@angular/core";
import {BookingService} from "../service/booking.service";
import {Booking} from "../model/booking";
@Component({
  templateUrl: 'app/booking/booking-creator.component.html',
  selector: 'booking-creator'
})
export class BookingCreatorComponent {
  date: Date = new Date();
  isBooked: boolean;
  booking: Booking;

  constructor(private bookingService: BookingService) {
    this.date.setHours(this.date.getHours() + 3);
    this.date.setMinutes(0);
    this.date.setSeconds(0);
  }

  dateChanged() {
    console.log(this.date.toDateString());
  }

  book() {
    this.bookingService.book(this.date).subscribe(booking => this.booking = booking);
    this.isBooked = true;
  }
}
