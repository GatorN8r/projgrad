import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

public user: Observable<User>;
public baseUrl = 'http://staging.tangent.tngnt.co/api-token-auth/';
private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

constructor(private http: HttpClient, private rt: Router) { }

login(user: User) {
const authInfo = {
  'username': user.Username,
  'password': user.Password
};
return this.http.post<any>(this.baseUrl, authInfo, {headers: this.httpHeaders});
}

logout() {
  localStorage.removeItem('user');
  this.rt.navigate(['login']);

}

}
