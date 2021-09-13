import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarModule} from 'primeng/sidebar';

import { SharedModule } from '../../shared/shared-module.module';
import { FilterComponent } from './filter/filter.component';
import { PicturesViewModule } from './pictures-view/pictures-view.module';

@NgModule({
  declarations: [
    GalleryComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SidebarModule,
    SharedModule,
    PicturesViewModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GalleryModule { }
