import { NgModule } from '@angular/core';

import { CarModelComponent } from './car-model.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
],
  declarations: [CarModelComponent],
  exports: [CarModelComponent]
})
export class CarModelModule { }
