import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandDetailComponent } from './BrandDetail/brand-detail.component';
import { CarBrandComponent } from './car-brand.component';
import { CarModelComponent } from './CarModel/car-model.component';

const routes: Routes = [
  { path: 'detail/:id', component: BrandDetailComponent},
  { path: 'car-model', component: CarModelComponent},
  { path: '', component: CarBrandComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarBrandRoutingModule { }
