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

  book(booking: Booking): Observable<Booking> {
    return this.http.post(this.bookingsUrl + '/' + booking.restaurantName, JSON.stringify(booking), this.authService.getStorageOptions())
      .map(res => res.json())
      .catch(ex => {
        let s: string = ex.json().details[0];
        if (ex.status == 500) {
          if (s.match("MonthOfYear")) {
            return Observable.throw('wrong month');
          } else if (s.match("DayOfMonth")) {
            return Observable.throw('wrong day');
          } else if (s.match("HourOfDay")) {
            return Observable.throw('wrong hour');
          } else if (s.match("MinuteOfHour")) {
            return Observable.throw('wrong minute');
          }
        }
        return Observable.throw(s);
      });
  }

  getAll() : Observable<Booking[]> {
    return this.http.get(this.bookingsUrl, this.authService.getStorageOptions()).map(res => res.json())
      .catch(ex => ex.json().details[0]);
  }

  deleteByDate(date: string) {
    this.http.delete(this.bookingsUrl + '?date=' + date, this.authService.getStorageOptions()).subscribe(() => {});
  }
}
