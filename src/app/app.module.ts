import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './features/layouts/footer/footer.component';
import { GalleryModule } from './features/gallery/gallery.module';

import { NavbarmenuModule } from './features/layouts/navbar/navbarmenu/navbarmenu.module';

import { SharedModule } from './shared/shared-module.module';
import {SidebarModule} from 'primeng/sidebar'; 

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent, 
  ],

  imports: [
    //SharedModule,
    BrowserModule,
    AppRoutingModule,
    NavbarmenuModule,
    GalleryModule,
    SidebarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
