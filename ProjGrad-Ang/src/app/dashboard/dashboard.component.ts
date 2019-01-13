import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

public doughnutChartLabels = ['Sales q1', 'Sales q2', 'Sales q3', 'Sales q4'];
public doughnutChartData = [120, 150, 180, 90];
public doughnutChartType = 'doughnut';

public pieChartLabels = ['Seniors', 'Intermediates', 'Juniors', 'Grads'];
public pieChartData = [120, 150, 180, 90];
public pieChartType = 'pie';

public barChartOptions = {
  scaleHowVertLines: false,
  responsive: true
};
public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
public barChartType = 'bar';
public barChartLegend = true;

barChartData = [
  {data: [5, 2, 15, 8, 0, 2, 6, 1, 3, 0, 0, 10], label: 'no. of emp male'},
  {data: [3, 6, 0, 1, 6, 4, 9, 0, 21, 1, 2, 3], label: 'no. of emp female'}
];

public radarChartLabels = ['q1', 'q2', 'q3', 'q4'];
public radarChartData = [
  {data: [5, 2, 15, 8], label: '2018 KPI'},
  {data: [3, 6, 0, 1], label: '2019 KPI'}
];
public radarChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
