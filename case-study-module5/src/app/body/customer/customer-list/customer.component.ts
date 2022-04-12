import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../customer.service";
import {ICustomer} from "../../../models/ICustomer";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: ICustomer[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.getCustomerList().subscribe(data => {
        this.customerList = data;
        console.log(this.customerList)
      }
    )
  }

}
