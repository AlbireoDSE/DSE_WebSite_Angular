import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { IconsModule } from 'src/app/shared/icons-module.module';
import { HomeContentComponent } from './home-content/home-content.component';

@NgModule({
  declarations: [HomeComponent, HomeContentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconsModule
  ]
})
export class HomeModule { }
