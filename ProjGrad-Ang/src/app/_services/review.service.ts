import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

constructor(private http: HttpService) { }

route = 'review';

getReviews(): Observable<Review[]> {
  return this.http.get<Review[]>(this.route);
}
}
