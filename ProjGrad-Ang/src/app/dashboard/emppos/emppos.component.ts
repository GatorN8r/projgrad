import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-emppos',
  templateUrl: './emppos.component.html',
  styleUrls: ['./emppos.component.css']
})
export class EmpposComponent implements OnInit {

  public employees: any;
  noFrontend = 0;
  noBackend = 0;
  noProj = 0;
  noNon = 0;
  numEmpPos = [];
  levels = [];

  constructor( private emp: EmployeeService) { }

  ngOnInit() {

    this.emp.getTEmps().subscribe( (res: any) => {

      res.forEach(element => {

        if (element.position) {

          if (element.position.name === 'Project Manager' ) {

            this.levels.push(element.position.level);
            this.noProj++;
          }

          if (element.position.name === 'Back-end Developer' ) {

            this.levels.push(element.position.level);
            this.noBackend++;
          }

          if (element.position.name === 'Front-end Developer' ) {

            this.levels.push(element.position.level);
            this.noFrontend++;
          }

          if (element.position.name === 'Other' ) {

            this.levels.push(element.position.level);
            this.noNon++;
          }


        }
      });

    this.numEmpPos = new Chart('canv3', {
      type: 'polarArea',
      data: {
        labels: ['Project Manager', 'Back-end Developer', 'Front-end Developer', 'Other', ],
        datasets: [
          {
            data: [this.noProj, this.noBackend, this.noFrontend, this.noNon],
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
