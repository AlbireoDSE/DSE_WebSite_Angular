import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarmenuComponent } from './features/layouts/navbar/navbarmenu/navbarmenu.component';
import { FooterComponent } from './features/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarmenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
