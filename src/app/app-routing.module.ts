import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/car-brand' },
  { path: 'car-brand', loadChildren: () => import('./pages/CarBrand/car-brand.module').then(m => m.CarBrandModule) },
  { path: 'car-model', loadChildren: () => import('./pages/CarModel/car-model.module').then(m => m.CarModelModule) },
  { path: 'brand-detail/:id', loadChildren: () => import('./pages/BrandDetail/brand-detail.module').then(m => m.BrandDetailModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
