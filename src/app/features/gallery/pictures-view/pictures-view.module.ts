import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { PicturesViewComponent } from './pictures-view.component';
import { IconsModule } from 'src/app/shared/icons-module.module';

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
