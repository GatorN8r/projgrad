import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private myRt: Router) {}

sendToken(token: string) {
  localStorage.setItem('user', token);
}

getToken() {
  return localStorage.getItem('user');
}

isLoggedIn() {
  return this.getToken() !== null;
}

logout() {
  localStorage.removeItem('user');
  this.myRt.navigate(['login']);
}

}
