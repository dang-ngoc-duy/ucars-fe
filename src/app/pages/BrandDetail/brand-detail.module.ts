import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzListModule } from "ng-zorro-antd/list";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";

import { BrandDetailComponent } from "./brand-detail.component";
import { BrandDetailRoutingModule } from "./brand-detail.routing.module";

@NgModule({
    imports: [
      CommonModule,
      BrandDetailRoutingModule, 
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
    declarations: [BrandDetailComponent],
    exports: [BrandDetailComponent]
  })
  export class BrandDetailModule { }