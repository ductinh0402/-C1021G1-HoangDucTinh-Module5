import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../models/ICustomer";
import {Customer} from "../../dao/Customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:ICustomer[]=Customer.customers;
  constructor() { }

  ngOnInit(): void {
  }

}
