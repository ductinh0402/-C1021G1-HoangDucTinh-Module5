import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {CustomerComponent} from "./customer-list/customer.component";
// import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerUpdateComponent} from "./customer-update/customer-update.component";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    CustomerComponent,
    // CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDetailComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ], exports : [
    CustomerComponent
  ]
})
export class CustomerModule { }
