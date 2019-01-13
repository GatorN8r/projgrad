import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import {Employee} from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  route = 'employee';

constructor(private httpService: HttpService) { }

getEmps(): Observable<Employee[]> {
  return this.httpService.get<Employee[]>(this.route);
}

getTEmps() {
  return this.httpService.getT(this.route);
}

}
