import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureCardComponent } from './picture-card/picture-card.component';



@NgModule({
  declarations: [
    PictureCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PictureCardComponent
  ]
})
export class PicturesViewModule { }
