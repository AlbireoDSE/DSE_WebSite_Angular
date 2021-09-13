import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
//import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons'; //import all solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; //import all reg
import { fab } from '@fortawesome/free-brands-svg-icons';
//import { faEye } from '@fortawesome/free-solid-svg-icons';

//import {faEye} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FontAwesomeModule,  
    //FaIconLibrary 
  ]
})
export class IconsModule {
  constructor(libraryn: FaIconLibrary){
    libraryn.addIconPacks(fab, fas, far);
    //libraryn.addIcons(faEye);
  }
}
