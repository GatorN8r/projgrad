import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private http: HttpClient) { }

public baseUrl = 'http://staging.tangent.tngnt.co/api/';
public httheaders: HttpHeaders = new HttpHeaders({'Authorization': 'Token 2a3d1af2f3f6d1cddaa3012c1c465fcbdffa3678'});

get<T> ( route: string): Observable<T>  {
  return this.http.get<T>(this.baseUrl + route, {headers: this.httheaders});
  }

getT(route: string) {
return this.http.get(this.baseUrl + route, {headers: this.httheaders}).pipe(map(res => res));
}

post<T, R> (model: R, route: string): Observable<T> {
      return this.http.post<T>(
        this.baseUrl + route, model, {headers: this.httheaders});

  }

  patch<T> () {

  }

  delete<T> () {

  }

}
