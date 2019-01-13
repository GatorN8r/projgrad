import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Employee } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor( private http: HttpService) { }

route = 'employee/me';

getProfiles(): Observable<Employee[]> {
  return this.http.get<Employee[]>(this.route);
}

getTProfiles() {
  return this.http.getT(this.route);
}

}
