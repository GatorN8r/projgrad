import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

user: User = new User();

  constructor(private auth: UserService, private rt: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.auth.login(this.user)) {
        return true;
      } else {
        this.rt.navigate(['login']);
        return false;
      }
  }
}
