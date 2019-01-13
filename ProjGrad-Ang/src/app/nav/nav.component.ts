import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../_services/profile.service';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public emp: any;

  constructor(private usr: ProfileService, public auth: AuthService) { }

  ngOnInit() {
  this.getEmp();
  }

  getEmp() {

    this.usr.getProfiles().subscribe(resp => {
     this.emp = resp;
    });
  }

  loggedIn() {
    const token = localStorage.getItem('user');
    return !!token;
    }

    logout() {
    localStorage.removeItem('user');
    console.log('logged out successfully');

    }

}
