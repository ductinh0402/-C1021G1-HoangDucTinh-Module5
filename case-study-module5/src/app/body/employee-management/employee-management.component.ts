import { Component, OnInit } from '@angular/core';
import {IEmployee} from "../../models/IEmployee";
import {Employee} from "../../dao/Employee";

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
   employees:IEmployee[]=Employee.employee;
  constructor() { }

  ngOnInit(): void {
  }

}
