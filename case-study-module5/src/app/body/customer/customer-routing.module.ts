import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./customer-list/customer.component";
// import {CustomerCreateComponent} from "./customer-create/customer-create.component";


const routes: Routes = [
  {
    path:"customer-list",component: CustomerComponent
  },
  // {
  //   path:"customer-create",component: CustomerCreateComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
