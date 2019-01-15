import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() cancelLog = new EventEmitter();

  user: User;
  loginForm: FormGroup;

  constructor(private users: UserService, private router: Router, private fb: FormBuilder,
    private auth: AuthService, private alertify: AlertifyService) {

    }



  ngOnInit() {
    // this.users.logout();
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    });


  }


  onlogin() {

if (this.loginForm.valid) {
  this.user = Object.assign({}, this.loginForm.value);
  this.users.login(this.user).subscribe(() => {
    this.alertify.success('Login successful');
  }, error => {
    this.alertify.error('Incorrect credentials');
  }, () => {
    this.users.login(this.user).subscribe(result => {
      localStorage.setItem('user', result.token);
      this.router.navigate(['/employee']);
    });
  });

}



    // this.users.login(this.user)
    // .pipe(first())
    // .subscribe(result => {
    //   if (result && result.token) {
    //     localStorage.setItem('user', result.token);
    //     this.router.navigate(['/employee']);
    //     console.log('logged in successfully');
    //   } else {
    //     console.log('Error, Review code');
    //   }

    // });

  }

  loggedIn() {
    const token = localStorage.getItem('user');
    return !!token;
  }


  cancel() {
    this.cancelLog.emit(false);
  }

}
