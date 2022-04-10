import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./body/customer-management/customer.component";
import {BodyComponent} from "./body/body.component";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {EmployeeManagementComponent} from "./body/employee-management/employee-management.component";
const routes:Routes=[
  {
    path:'',pathMatch:'full',redirectTo:'body'
  },
  {
    path:'header',component: HeaderComponent
  },
  {
    path:"body",component: BodyComponent
  },
  {
    path:"customer-management",component: CustomerComponent
  },
  {
    path:"employee-management",component: EmployeeManagementComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
