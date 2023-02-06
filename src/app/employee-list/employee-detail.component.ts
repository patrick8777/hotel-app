import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListDetailComponent implements OnInit {
  public errorMsg: any;

  public employees: IEmployee[] | undefined;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService
      .getEmployees()
      .subscribe((employees: IEmployee[]) => (this.employees = employees));
  }
}
