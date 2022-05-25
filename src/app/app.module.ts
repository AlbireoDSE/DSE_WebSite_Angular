import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FooterComponent } from './features/layouts/footer/footer.component';


import { NavbarmenuModule } from './features/layouts/navbar/navbarmenu/navbarmenu.module';
import {FooterModule } from './features/layouts/footer/footer.module';

import {RippleModule} from 'primeng/ripple';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarmenuModule,
    RippleModule,
    BrowserAnimationsModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
