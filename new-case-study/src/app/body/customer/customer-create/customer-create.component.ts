import { Component, OnInit } from '@angular/core';
import {ICustomerType} from "../../../models/ICustomerType";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerType: ICustomerType[] | undefined;
  customer: FormGroup | undefined;
  constructor(private customerService: CustomerService,private route: Router) { }

  ngOnInit(): void {
    this.customer = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      code: new FormControl(''),
      birthday: new FormControl(''),
      gender: new FormControl(''),
      card: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      customerType: new FormControl(''),
    })
    this.customerService.getCustomerType().subscribe(data => {
        this.customerType = data;
      }
    )
  }
  save() {
    this.customerService.save(this.customer).subscribe(
      next => {
        this.route.navigateByUrl('customer-list');
        this.customerService.message = 'Thêm mới thành công';
      }, error => {
        this.customerService.message = 'Thêm mới không thành công';
      }
    )
  }
}
