import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-numofemp',
  templateUrl: './numofemp.component.html',
  styleUrls: ['./numofemp.component.css']
})
export class NumofempComponent implements OnInit {

  public employees: any;
  noJun = 0;
  noSen = 0;
  noGrad = 0;
  noInt = 0;
  numEmpChart = [];
  levels = [];

  constructor(private emp: EmployeeService) { }

  ngOnInit() {

this.emp.getTEmps().subscribe( (res: any) => {

  console.log(res);

  res.forEach(element => {
    console.log(element);

    if (element.position) {

      if (element.position.level === 'Senior' ) {

        this.levels.push(element.position.level);
        this.noSen++;
      }

      if (element.position.level === 'Junior' ) {

        this.levels.push(element.position.level);
        this.noJun++;
      }

      if (element.position.level === 'Graduate' ) {

        this.levels.push(element.position.level);
        this.noGrad++;
      }

      if (element.position.level === 'Intermediate' ) {

        this.levels.push(element.position.level);
        this.noInt++;
      }



    }
  });

this.numEmpChart = new Chart('canv1', {
  type: 'pie',
  data: {
    labels: ['Graduates', 'Junior', 'Intermediates', 'Senior', ],
    datasets: [
      {
        data: [this.noGrad, this.noJun, this.noInt, this.noSen],
        borderColor: '#3cba9f',
        backgroundColor: ['#FF6E33', '#FFE933', '#33E3FF', '#3CFF33'],
        borderWidth: 2
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
