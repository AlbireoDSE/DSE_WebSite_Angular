import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery-list/gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SidebarModule} from 'primeng/sidebar';

import { SharedModule } from '../../shared/shared-module.module';
import { IconsModule } from 'src/app/shared/icons-module.module';

import { FilterComponent } from './filter/filter.component';
import { PicturesViewModule } from './pictures-view/pictures-view.module';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { TechnicalSheetComponent } from './gallery-detail/technical-sheet/technical-sheet.component';
import { ObjectSheetComponent } from './gallery-detail/object-sheet/object-sheet.component';
import { DescriptionSheetComponent } from './gallery-detail/description-sheet/description-sheet.component';


@NgModule({
  declarations: [
    GalleryComponent,
    FilterComponent,
    GalleryDetailComponent,
    TechnicalSheetComponent,
    ObjectSheetComponent,
    DescriptionSheetComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SidebarModule,
    SharedModule,
    PicturesViewModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class GalleryModule { }
