import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureCardComponent } from './picture-card/picture-card.component';
import { IconsModule } from 'src/app/shared/icons-module.module';
import { PicturesViewComponent } from './pictures-view.component';


@NgModule({
  declarations: [
    PictureCardComponent,
    PicturesViewComponent,
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    PicturesViewComponent
  ]
})
export class PicturesViewModule { }
