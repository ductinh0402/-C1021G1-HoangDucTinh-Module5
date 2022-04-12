import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {ICustomer} from "../../../models/ICustomer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: ICustomer[] | undefined;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerList().subscribe(data => {
        this.customerList = data;
        console.log(this.customerList)
      }
    )
  }

}
