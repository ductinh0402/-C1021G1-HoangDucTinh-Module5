import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryForm: FormGroup;
  id: number;

  constructor(private categoryService: CategoryService
    , private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id= +paramMap.get('id');
      const category=this.getCategory(this.id);
      this.categoryForm=new FormGroup({
        id:new FormControl(category.id),
        name:new FormControl(category.name),
      })
    })
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = +paramMap.get('id');
    //   this.getCategory(this.id);
    // });
  }

  ngOnInit(): void {
  }

  private getCategory(id: number) {
    return this.categoryService.findById(id);
  }
  delete(id:number){
    this.categoryService.deleteCategory(id);
      this.router.navigate(['/category/category-list']);
  }
  // getCategory(id: number) {
  //   return this.categoryService.findById(id).subscribe(category => {
  //     this.categoryForm = new FormGroup({
  //       name: new FormControl(category.name),
  //     });
  //   });
  // }
  //
  // delete(id: number) {
  //   this.categoryService.deleteCategory(id).subscribe(() => {
  //     this.router.navigate(['/category/category-list']);
  //   }, e => {
  //     console.log(e);
  //   });
  // }
}
