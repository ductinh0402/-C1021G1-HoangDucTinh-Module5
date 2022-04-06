import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../../../models/ICustomer";
import {Customer} from "../../../dao/Customer";
import {ICustomerType} from "../../../models/ICustomerType";
import {CustomerType} from "../../../dao/CustomerType";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  // customer:Customer = new Customer();
  // customersType:ICustomerType=new CustomerType();


  constructor() {
  }

  ngOnInit(): void {
  }

  // id: number
  // name: string
  // gender: boolean
  // address: string
  // email: string
  // phone: string
  // idCard: number
  // birthday: string
  // idCustomerType: number

  // saveCustomer() {
  //
  //   this.customer.id = this.id;
  //   this.customer.name = this.name;
  //   this.customer.gender = this.gender;
  //   this.customer.address = this.address;
  //   this.customer.email = this.email;
  //   this.customer.phone = this.phone;
  //   this.customer.IdCard = this.idCard;
  //   this.customer.birthday = this.birthday;
  //   this.customer.customerType.id = this.idCustomerType;
  //
  // }
}
