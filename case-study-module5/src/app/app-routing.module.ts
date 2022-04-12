import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BodyComponent} from "./body/body.component";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {EmployeeRoutingModule} from "./body/employee/employee-routing.module";
import {CustomerRoutingModule} from "./body/customer/customer-routing.module";

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
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    EmployeeRoutingModule,
    CustomerRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
