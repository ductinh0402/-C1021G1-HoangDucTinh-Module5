import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ImgSlideComponent } from './img-slider/img-slide/img-slide.component';
import {NgxPaginationModule} from "ngx-pagination";




@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent],
  exports: [
    ImgSlideComponent,
    ImgSliderComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class ImgSliderModule { }
