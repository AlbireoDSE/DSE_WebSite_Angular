import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//component
import { RessourcesComponent } from './ressources.component';

//routing
import { RessourcesRoutingModule } from './ressources-routing.module';

@NgModule({
  declarations: [
    RessourcesComponent
  ],
  imports: [
    CommonModule,
    RessourcesRoutingModule
  ]
})
export class RessourcesModule { }
