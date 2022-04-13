import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ICustomerType} from '../../../models/ICustomerType';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerTypeList: ICustomerType[];

  constructor(private customerService: CustomerService,
              private router: Router,
              private active: ActivatedRoute,
              private snackBar: MatSnackBar
  ) {
  }


  customerEdit = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    code: new FormControl(''),
    birthday: new FormControl(''),
    gender: new FormControl(''),
    card: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    customerType: new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
    }),
  });


  ngOnInit(): void {
    this.customerService.getCustomerType().subscribe(data => {
      this.customerTypeList = data;
      this.customerService.getCustomerById(this.active.snapshot.paramMap.get('id')).subscribe(data2 => {
        this.customerEdit.setValue(data2);
      });
    });
  }

  update() {
    this.customerService.updateCustomer(this.active.snapshot.paramMap.get('id'), this.customerEdit.value).subscribe(data => {
      this.router.navigateByUrl('/customer-list');
      this.snackBar.open('Đã cập nhật thành công', 'OK');
      console.log(data);
    });
  }
}
