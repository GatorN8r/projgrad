import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  searchText: any;
  public employees: any;

  constructor(private emp: EmployeeService) { }

  ngOnInit() {
    this.getEmp();
  }

  getEmp() {
    this.emp.getEmps().subscribe(resp => {
      this.employees = resp;
    });
  }

}
