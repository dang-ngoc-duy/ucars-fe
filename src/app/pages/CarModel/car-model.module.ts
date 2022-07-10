import { NgModule } from '@angular/core';

import { CarModelRoutingModule } from './car-model-routing.module';

import { CarModelComponent } from './car-model.component';
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
    CarModelRoutingModule, 
    NzGridModule,
    NzDropDownModule,
    NzInputModule,
    NzButtonModule,
    NzListModule,
    NzSkeletonModule
],
  declarations: [CarModelComponent],
  exports: [CarModelComponent]
})
export class CarModelModule { }
