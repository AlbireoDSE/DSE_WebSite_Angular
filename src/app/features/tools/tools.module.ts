import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { ToolsRoutingModule} from './tools-routing.module';
import { AstrometryComponent } from './astrometry/astrometry.component';
import { CalculatorsComponent } from './calculators/calculators.component'

import { IconsModule } from 'src/app/shared/icons-module.module';

@NgModule({
  declarations: [
    ToolsComponent,
    AstrometryComponent,
    CalculatorsComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    IconsModule
  ]
})
export class ToolsModule { }
