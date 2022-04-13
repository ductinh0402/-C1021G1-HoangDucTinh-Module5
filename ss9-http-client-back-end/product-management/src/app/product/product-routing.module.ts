import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';


const routes: Routes = [
  {
    path: 'product-list', component: ProductListComponent
  },
  {
    path: 'product-create', component: ProductCreateComponent
  },
  {
    path: 'product-delete/:id', component: ProductDeleteComponent
  },
  {
    path: 'product-edit/:id', component: ProductEditComponent
  },
  {
    path: 'product-detail/:id', component: ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
