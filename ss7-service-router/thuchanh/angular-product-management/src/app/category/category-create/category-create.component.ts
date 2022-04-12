import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category:FormGroup;

  constructor(private categoryService: CategoryService) {
    this.category=new FormGroup({
      id:new FormControl(''),
      name:new FormControl('')
    })
  }

  ngOnInit(): void {
  }
 submit(){
    const category=this.category.value;
    this.categoryService.saveCategory(category);
    this.category.reset();
 }

  // submit() {
  //   const category = this.category.value;
  //   this.categoryService.saveCategory(category).subscribe(() => {
  //     this.category.reset();
  //     alert('Tạo thành công');
  //   }, e => {
  //     console.log(e);
  //   });
  // }
}
