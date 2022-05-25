import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports: [ 
    ButtonModule,
    InputTextModule,
    DropdownModule,
    AccordionModule,
    TooltipModule
  ]
})
export class SharedModule { }