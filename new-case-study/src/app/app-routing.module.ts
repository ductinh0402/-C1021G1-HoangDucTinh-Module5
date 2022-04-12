import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {BodyComponent} from "./body/body.component";
import {EmployeeRoutingModule} from "./body/employee/employee-routing.module";
import {CustomerRoutingModule} from "./body/customer/customer-routing.module";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'body'
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: "body", component: BodyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    EmployeeRoutingModule,
    CustomerRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
