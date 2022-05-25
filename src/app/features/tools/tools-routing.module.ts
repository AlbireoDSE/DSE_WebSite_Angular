import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AstrometryComponent } from './astrometry/astrometry.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { ToolsComponent } from './tools.component';

const routes: Routes = [
    {
       path: '',
       component: ToolsComponent,
       children: [
            { 
                path:'calculators', 
                component: CalculatorsComponent
            },
            { 
                path:'astrometry',
                component: AstrometryComponent
            },
            {
                path: '',
                redirectTo: 'calculators',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: 'calculators',
                pathMatch: 'full',
            },
       ] 
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ToolsRoutingModule {

}