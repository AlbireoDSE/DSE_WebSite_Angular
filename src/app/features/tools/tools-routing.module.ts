import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ToolsComponent } from './tools.component';

const routes: Routes = [
    {
       path: '',
       component: ToolsComponent,
       children: [
            { 
                path:'astrometry',
                //component: AstrometryComponent
            },
            { 
                path:'calculators', 
                //component: CalculatorsComponent
            } 
       ] 
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ToolsRoutingModule {

}