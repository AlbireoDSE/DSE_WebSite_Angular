import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

import { IconsModule } from 'src/app/shared/icons-module.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
