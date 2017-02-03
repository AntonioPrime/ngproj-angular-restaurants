import {Component} from "@angular/core";
import {BookingService} from "../service/booking.service";
import {Booking} from "../model/booking";
@Component({
  templateUrl: 'app/booking/booking-creator.component.html',
  selector: 'booking-creator'
})
export class BookingCreatorComponent {
  date: Date = new Date();
  booking: Booking;

  constructor(private bookingService: BookingService) {
  }

  book() {
    this.bookingService.book(this.date).subscribe(booking => this.booking = booking);
  }
}
