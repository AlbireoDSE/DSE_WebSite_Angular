import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { GalleryComponent } from './gallery-list/gallery.component';

const routes: Routes = [
{
    path:'',
    component: GalleryComponent
},
{
    path:':id',
    component: GalleryDetailComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GalleryRoutingModule {

}