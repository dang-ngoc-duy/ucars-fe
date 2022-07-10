import { NgModule } from '@angular/core';

import { CarBrandRoutingModule } from './car-brand-routing.module';

import { CarBrandComponent } from './car-brand.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CarBrandRoutingModule, 
    NzGridModule,
    NzDropDownModule,
    NzInputModule,
    NzButtonModule,
    NzListModule,
    NzSkeletonModule
],
  declarations: [CarBrandComponent],
  exports: [CarBrandComponent]
})
export class CarBrandModule { }
