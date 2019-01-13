import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-birthdayinfo',
  templateUrl: './birthdayinfo.component.html',
  styleUrls: ['./birthdayinfo.component.css']
})
export class BirthdayinfoComponent implements OnInit {

  public employees: any;
  noJan = 0;
  noFeb = 0;
  noMarch = 0;
  noApr = 0;
  noMay = 0;
  noJun = 0;
  noJuly = 0;
  noAug = 0;
  noSep = 0;
  noOct = 0;
  noNov = 0;
  noDec = 0;

  numBirthChart = [];
  levels = [];

  constructor(private emp: EmployeeService) { }

  ngOnInit() {

this.emp.getTEmps().subscribe( (res: any) => {

  console.log(res);

  res.forEach(element => {
    console.log(element.birth_date.substring(5, 7));

    if (element.birth_date) {

      if (element.birth_date.substring(5, 7) === '01' ) {

        this.levels.push(element.birth_date);
        this.noJan++;
      }

      if (element.birth_date.substring(5, 7) === '02' ) {

        this.levels.push(element.birth_date);
        this.noFeb++;
      }

      if (element.birth_date.substring(5, 7) === '03' ) {

        this.levels.push(element.birth_date);
        this.noMarch++;
      }

      if (element.birth_date.substring(5, 7) === '04' ) {

        this.levels.push(element.birth_date);
        this.noApr++;
      }

      if (element.birth_date.substring(5, 7) === '05' ) {

        this.levels.push(element.birth_date);
        this.noMay++;
      }

      if (element.birth_date.substring(5, 7) === '06' ) {

        this.levels.push(element.birth_date);
        this.noJun++;
      }

      if (element.birth_date.substring(5, 7) === '07' ) {

        this.levels.push(element.birth_date);
        this.noJuly++;
      }

      if (element.birth_date.substring(5, 7) === '08' ) {

        this.levels.push(element.birth_date);
        this.noAug++;
      }

      if (element.birth_date.substring(5, 7) === '09' ) {

        this.levels.push(element.birth_date);
        this.noSep++;
      }

      if (element.birth_date.substring(5, 7) === '10' ) {

        this.levels.push(element.birth_date);
        this.noOct++;
      }

      if (element.birth_date.substring(5, 7) === '11' ) {

        this.levels.push(element.birth_date);
        this.noNov++;
      }

      if (element.birth_date.substring(5, 7) === '12' ) {

        this.levels.push(element.birth_date);
        this.noDec++;
      }

    }
  });

this.numBirthChart = new Chart('canv2', {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [this.noJan, this.noFeb, this.noMarch, this.noApr, this.noMay, this.noJun, this.noJuly,
           this.noAug, this.noSep, this.noOct, this.noNov, this.noDec ],
        label: 'No. of Employees',
        backgroundColor: ['#FF6E33', '#FFE933', '#ACFF33', '#3CFF33', '#33FF8D', '#33E3FF', '#3358FF', '#6133FF', '#E633FF',
         '#FF33C1', '#B11A1A', '#918B8A'],
        borderColor: '#3cba9f' ,
        borderWidth: 1
      }
    ],
    options: {
      responsive: true,
      legend: {
        display: 'top'
      }
    },
    scales: {
      xAxes: [{display: true}],
      yAxes: [{display: true}]
  }
  }
});

});


  }

}
