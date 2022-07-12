import { NgModule } from '@angular/core';

import { CarModelComponent } from './car-model.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CarModelRoutingModule } from './car-model-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [
    CommonModule,
    CarModelRoutingModule, 
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
  declarations: [CarModelComponent],
  exports: [CarModelComponent]
})
export class CarModelModule { }
