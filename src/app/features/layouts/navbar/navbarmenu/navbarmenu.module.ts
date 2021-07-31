import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { NavbarmenuComponent } from './navbarmenu.component';

@NgModule({
  declarations: [
    DropdownMenuComponent,
    NavbarmenuComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarmenuComponent
    
  ]
})
export class NavbarmenuModule { }
