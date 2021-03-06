import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';

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
    path: 'ressources', 
    loadChildren: () => import('./features/ressources/ressources.module').then((module) => module.RessourcesModule)
  },
  {
    path: 'tools',
    loadChildren: () => import('./features/tools/tools.module').then((module) => module.ToolsModule)
  },
  {
    path: 'gear',
    loadChildren: () => import('./features/gear/gear.module').then((module) => module.GearModule)
  },
  {
    path: 'about', 
    component: AboutComponent
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
