import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service/service.service";
import {Product} from "../model/product";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  private sub: Subscription;
  constructor(private productService: ServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.products = this.productService.getAll();
  }




}
