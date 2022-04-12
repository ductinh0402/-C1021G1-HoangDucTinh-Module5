import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';

const routes: Routes = [
  {
    path: 'customer-list', component: CustomerListComponent
  },
  {
    path: 'customer-create', component: CustomerCreateComponent
  },
  {
    path: 'customer-delete/:id', component: CustomerDeleteComponent
  },
  {
    path: 'customer-edit/:id', component: CustomerEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
