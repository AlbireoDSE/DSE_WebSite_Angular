import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//component
import { GearComponent } from './gear.component';

//routing
import { GearRoutingModule } from './gear-routing.module';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';

@NgModule({
  declarations: [
    GearComponent,
    EquipmentListComponent
  ],
  imports: [
    CommonModule,
    GearRoutingModule
  ]
})
export class GearModule { }
