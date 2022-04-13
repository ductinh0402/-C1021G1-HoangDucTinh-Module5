import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {ICustomer} from '../../../models/ICustomer';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';
import {ICustomerType} from '../../../models/ICustomerType';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: ICustomer[];


  constructor(private customerService: CustomerService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private router: Router) {


  }

  ngOnInit() {
    this.customerService.getCustomerList().subscribe(data =>
        this.customerList = data,
      error => this.customerList = [],
    );
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


  searchByName(value) {
    this.customerService.findByName(value).subscribe(data => {
        this.customerList = data;
        if (this.customerList.length === 0) {
          this.snackBar.open('Không tìm thấy tên bạn tìm kiếm', 'OK');
          this.ngOnInit();
        }
      }
    );
  }
}
