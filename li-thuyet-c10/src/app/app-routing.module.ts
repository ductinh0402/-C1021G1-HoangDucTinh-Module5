import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentCreateComponent} from "./student-create/student-create.component";
import {CommonModule} from "@angular/common";
import {StudentListComponent} from "./student-list/student-list.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'student-list'},
  {path: 'student-create', component: StudentCreateComponent},
  {path: 'student-list',component: StudentListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
