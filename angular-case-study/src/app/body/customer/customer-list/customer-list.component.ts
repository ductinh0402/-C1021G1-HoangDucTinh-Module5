import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {ICustomer} from '../../../models/ICustomer';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';
import {ICustomerType} from '../../../models/ICustomerType';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: ICustomer[];
  customerTypeList: ICustomerType[];
  message: string;

  constructor(private customerService: CustomerService, private dialog: MatDialog) {


  }

  ngOnInit() {
    this.customerService.getCustomerList().subscribe(data =>
        this.customerList = data,
      error => this.customerList = [],
    );
    this.customerService.getCustomerType().subscribe(data =>
        this.customerTypeList = data,
      error => this.customerTypeList = [],
    );
    // console.log(this.customerService);
    this.message = this.customerService.message;
  }

  openDialogDelete(id) {
    this.customerService.getCustomerById(id).subscribe(data => {
      console.log(data);
      const dialogRef = this.dialog.open(CustomerDeleteComponent, {
        width: '500px',
        data: {datal: data},
      });
      dialogRef.afterClosed().subscribe(next => {
        console.log('Đóng dialog');
        this.ngOnInit();
      });
    });
  }


}
