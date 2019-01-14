import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../_services/profile.service';
import { ReviewService } from '../_services/review.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

public profile: any;
public review: any;
starting_sal = 0;
perfomance_sal = 0;
annual_inc = 0;

  constructor(private prof: ProfileService, private rev: ReviewService) {

  }

  ngOnInit() {
    this.getProf();
    this.getRev();

  }

getProf() {

    this.prof.getProfiles().subscribe(resp => {
    this.profile = resp;
  });

}

getRev() {

this.rev.getReviews().subscribe(resp => {
  this.review = resp;

  resp.forEach(elm => {

console.log(elm);

if (elm.type === 'S') {
  this.starting_sal = elm.salary;
}

if (elm.type === 'P') {
  this.perfomance_sal = elm.salary;
}

  });

  this.annual_inc = this.perfomance_sal - this.starting_sal;

});


}



}
