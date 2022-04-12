import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeManagementComponent} from "./employee-list/employee-management.component";


const routes: Routes = [
  {
    path:"employee-list",component: EmployeeManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
