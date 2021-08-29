import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';

import { SidebarModule} from 'primeng/sidebar';


import { SharedModule } from '../../shared/shared-module.module';
import { FilterComponent } from './filter/filter.component';
import { PicturesViewModule } from './pictures-view/pictures-view.module';
import { PicturesViewComponent } from './pictures-view/pictures-view.component';

@NgModule({
  declarations: [GalleryComponent, FilterComponent, PicturesViewComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SidebarModule,
    SharedModule,
    PicturesViewModule
  ]
})
export class GalleryModule { }
