import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {DictionaryPageComponent} from "./dictionary-page/dictionary-page.component";


const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'dictionary-page'
  },
  {
    path:'dictionary-page',component:DictionaryPageComponent,children:[
      {
        path:':key',
        component :DictionaryDetailComponent
      }
    ]
  },
  // {
  //   path:'translate/:word/:mean',component: DictionaryDetailComponent
  // }
  {
    path: 'dictionary/search/:word',
    component: DictionaryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
