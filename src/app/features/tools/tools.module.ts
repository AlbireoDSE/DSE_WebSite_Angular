import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { ToolsRoutingModule} from './tools-routing.module';
import { AstrometryComponent } from './astrometry/astrometry.component';
import { CalculatorsComponent } from './calculators/calculators.component'


@NgModule({
  declarations: [
    ToolsComponent,
    AstrometryComponent,
    CalculatorsComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
