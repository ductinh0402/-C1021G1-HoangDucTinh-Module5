import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.productService.findById(this.id).subscribe(product => {
        this.productForm = new FormGroup({
          name: new FormControl(product.name),
          price: new FormControl(product.price),
          description: new FormControl(product.description),
          category: new FormControl(product.category.id)
        });
      });
    });
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }


  updateProduct(id: number) {
    const product = this.productForm.value;
    product.category = {
      id: product.category
    };
    this.productService.updateProduct(id, product).subscribe(() => {
      alert('Cập nhật thành công');
    });
  }
}
