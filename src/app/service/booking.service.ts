import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Url} from "../url";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Booking} from "../model/booking";

@Injectable()
export class BookingService {
  private bookingsUrl = Url.getUrl('/bookings');

  constructor(private http: Http, private authService: AuthService) {
  }

  book(date: Date): Observable<Booking>{
    return this.http.post(this.bookingsUrl + '/' + 'the_table', JSON.stringify({date:'2017-12-09', time:"15:00"}), this.authService.getStorageOptions()).map(res => res.json());
  }
}
