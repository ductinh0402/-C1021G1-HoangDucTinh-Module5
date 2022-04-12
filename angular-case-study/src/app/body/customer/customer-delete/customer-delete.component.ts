import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  name: any;
  id: any;

  constructor(public dialogRef: MatDialogRef<CustomerDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private customerService: CustomerService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    console.log(this.data);
    this.name = this.data.datal.name;
    this.id = this.data.datal.id;
  }

  delete() {
    this.customerService.deleteById(this.id).subscribe(next => {
      console.log('đã xóa');
      this.dialogRef.close();
      this.snackBar.open('Đã xóa khách hàng thành công', 'OK');
    });
  }
}
