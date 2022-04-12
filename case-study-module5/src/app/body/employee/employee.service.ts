import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly API_EMPLOYEE_URL= "http://localhost:3000/employee";
  constructor() { }
}
