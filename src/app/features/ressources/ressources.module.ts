import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//component
import { RessourcesComponent } from './ressources.component';

//routing
import { RessourcesRoutingModule } from './ressources-routing.module';
import { RessourceCardComponent } from './ressource-card/ressource-card.component';

@NgModule({
  declarations: [
    RessourcesComponent,
    RessourceCardComponent
  ],
  imports: [
    CommonModule,
    RessourcesRoutingModule
  ]
})
export class RessourcesModule { }
