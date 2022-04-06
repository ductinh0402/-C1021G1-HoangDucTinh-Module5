import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./body/customer-management/customer.component";
import {BodyComponent} from "./body/body.component";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
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
