import {Component, OnInit} from '@angular/core';
import {ICustomerType} from '../../../models/ICustomerType';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {log} from 'util';
import {ICustomer} from '../../../models/ICustomer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerType: ICustomerType[];
  customer = new FormGroup({
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

  constructor(private customerService: CustomerService, private route: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.customerService.getCustomerType().subscribe(data => {
        this.customerType = data;
      }
    );
  }

  save() {
    this.customerService.save(this.customer.value).subscribe(
      (next) => {
        this.route.navigateByUrl('customer-list');
        this.snackBar.open('Thêm mới thành công', 'OK');
      }, error => {
        this.snackBar.open('Thêm mới không thành công', 'OK');
      }
    );
  }
}
