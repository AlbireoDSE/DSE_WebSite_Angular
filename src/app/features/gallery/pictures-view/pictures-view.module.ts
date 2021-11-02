import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { IconsModule } from 'src/app/shared/icons-module.module';
import { PicturesViewComponent } from './pictures-view.component';


@NgModule({
  declarations: [
    GalleryCardComponent,
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
