import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {HeaderComponent} from './header/header.component';


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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
