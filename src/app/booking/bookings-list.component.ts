import {Component, OnInit} from "@angular/core";
import {BookingService} from "../service/booking.service";
import {Booking} from "../model/booking";

@Component({
  selector: 'bookings-list',
  templateUrl: 'app/booking/bookings-list.component.html'
})
export class BookingsListComponent implements OnInit{
  bookings: Booking[];
  value: string;

  ngOnInit(): void {
    this.bookingService.getAll().subscribe(bookings => this.bookings = bookings);
  }

  constructor(private bookingService: BookingService) {
  }

}
