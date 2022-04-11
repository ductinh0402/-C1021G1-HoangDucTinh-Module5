import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service/service.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  constructor(private productService:ServiceService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    });
  }
  submit(){
    const  product=this.productForm.value;
    this.productService.save(product);
    this.productForm.reset();
  }
}
