import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then((module) => module.HomeModule)
  },
  {
    path: 'gallery', 
    loadChildren: () => import('./features/gallery/gallery.module').then((module) => module.GalleryModule)
  },
  {
    path: 'tools',
    loadChildren: () => import('./features/tools/tools.module').then((module) => module.ToolsModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
