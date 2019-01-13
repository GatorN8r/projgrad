import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  form;

  constructor(private users: UserService, private router: Router, private fb: FormBuilder,
    private auth: AuthService) {

      this.form = fb.group({

        username: ['', [Validators.required ]],
        password: ['', [Validators.required ]]

      });

    }


  ngOnInit() {
    // this.users.logout();
  }

login() {
  if (this.form.valid) {
this.auth.sendToken(this.form.value);
this.router.navigate(['employee']);
  }
}


  onlogin() {
    this.users.login(this.user)
    .pipe(first())
    .subscribe(result => {
      if (result && result.token) {
        localStorage.setItem('user', result.token);
        this.router.navigate(['/employee']);
        console.log('logged in successfully');
      } else {
        console.log('Error, Review code');
      }

    });

  }

  loggedIn() {
    const token = localStorage.getItem('user');
    return !!token;
  }

}
