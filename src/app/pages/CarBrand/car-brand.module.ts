import { NgModule } from '@angular/core';

import { CarBrandRoutingModule } from './car-brand-routing.module';

import { CarBrandComponent } from './car-brand.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CommonModule } from '@angular/common';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  imports: [
    CommonModule,
    CarBrandRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    NzGridModule,
    NzDropDownModule,
    NzInputModule,
    NzButtonModule,
    NzListModule,
    NzIconModule,
    NzSkeletonModule,
    NzCheckboxModule,
    NzAvatarModule,
    NzDividerModule,
    NzModalModule,
    NzSelectModule,
],
  declarations: [CarBrandComponent],
  exports: [CarBrandComponent]
})
export class CarBrandModule { }
