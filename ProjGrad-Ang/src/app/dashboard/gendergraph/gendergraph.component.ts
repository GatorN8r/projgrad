import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-gendergraph',
  templateUrl: './gendergraph.component.html',
  styleUrls: ['./gendergraph.component.css']
})
export class GendergraphComponent implements OnInit {

  public employees: any;
  noMale = 0;
  noFemale = 0;

  numGenderChart = [];
  levels = [];


  constructor(private emp: EmployeeService) { }

  ngOnInit() {


    this.emp.getTEmps().subscribe( (res: any) => {

      res.forEach(element => {

        if (element.gender) {

          if (element.gender === 'F' ) {

            this.levels.push(element.gender);
            this.noFemale++;
          }

          if (element.gender === 'M' ) {

            this.levels.push(element.gender);
            this.noMale++;
          }

        }
      });

    this.numGenderChart = new Chart('canv5', {
      type: 'horizontalBar',
      data: {
        labels: ['Female', 'Male'],
        datasets: [
          {
            data: [this.noFemale, this.noMale, 0],
            label: 'No. of Gender',
            backgroundColor: ['#FF6E33', '#FFE933'],
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
