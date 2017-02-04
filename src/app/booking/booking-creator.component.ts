import {Component, Input} from "@angular/core";
import {BookingService} from "../service/booking.service";
import {Booking} from "../model/booking";

@Component({
  templateUrl: 'app/booking/booking-creator.component.html',
  selector: 'booking-creator'
})
export class BookingCreatorComponent {
  booking: Booking;
  dateTime: string;
  buttonBlocked: boolean;
  error: string;
  @Input() restaurantName: string;

  constructor(private bookingService: BookingService) {
  }

  book() {
    let result = confirm("Please confirm to apply your booking.");
    if (result) {
      let date = this.dateTime.substr(0, 10);
      let time = this.dateTime.substr(11, 5);
      this.bookingService.book(new Booking(date, time, this.restaurantName))
        .subscribe(booking => {
          this.error = null;
          this.booking = booking;
        }, err => {
          this.booking = null;
          this.error = err;
        });
    }
  }

  buttonUnblock() {
    this.buttonBlocked = true;
  }
}
