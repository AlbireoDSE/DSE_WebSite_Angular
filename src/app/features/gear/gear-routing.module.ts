import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { GearComponent } from './gear.component';

const routes: Routes = [
{
    path:'',
    component: GearComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GearRoutingModule{}