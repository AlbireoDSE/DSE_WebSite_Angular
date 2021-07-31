import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './features/layouts/footer/footer.component';

import { NavbarmenuModule } from './features/layouts/navbar/navbarmenu/navbarmenu.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NavbarmenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
