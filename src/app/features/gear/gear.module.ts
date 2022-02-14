import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//component
import { GearComponent } from './gear.component';

//routing
import { GearRoutingModule } from './gear-routing.module';

@NgModule({
  declarations: [
    GearComponent
  ],
  imports: [
    CommonModule,
    GearRoutingModule
  ]
})
export class GearModule { }
