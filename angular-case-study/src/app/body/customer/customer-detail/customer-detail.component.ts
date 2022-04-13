import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {ActivatedRoute} from '@angular/router';
import {ICustomer} from '../../../models/ICustomer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: any;

  constructor(private customerService: CustomerService, private active: ActivatedRoute) {
  }

  customerDetail = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    code: new FormControl(''),
    birthday: new FormControl(''),
    gender: new FormControl(''),
    card: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    customerType: new FormControl('')
  });

  ngOnInit(): void {
    this.customerService.getCustomerById(this.active.snapshot.paramMap.get('id')).subscribe(data => {
      this.customer = data;
      this.customerDetail.setValue(this.customer);
      console.log(this.customerDetail.value);
    });

    //     this.customerDetail.value(data);
    //     console.log(this.customerDetail.value);
    //   });
  }

}
