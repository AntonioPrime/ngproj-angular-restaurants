import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {BookingService} from "../service/booking.service";
import {Booking} from "../model/booking";
import {Restaurant} from "../model/restaurant";

@Component({
  templateUrl: 'booking-creator.component.html',
  selector: 'booking-creator'
})
export class BookingCreatorComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.error = null;
    this.booking = null;
  }

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
    if (this.dateTime != null) {
      this.display = false;
      let date = this.dateTime.toISOString().substr(0, 10);
      let time = this.dateTime.toTimeString().substr(0, 5);
      this.dateTime = null;
      this.bookingService.book(new Booking(date, time, this.restaurant.name))
        .subscribe(booking => {
          this.error = null;
          this.booking = booking;
        }, err => {
          this.booking = null;
          this.error = err;
        });
    } else {
      this.error = 'Date is not correct.'
    }
  }

  showDialog() {
    this.display = true;
  }
}
