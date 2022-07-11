import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrandDetailComponent } from "./brand-detail.component";

@NgModule({
    imports: [
      CommonModule,
  ],
    declarations: [BrandDetailComponent],
    exports: [BrandDetailComponent]
  })
  export class BrandDetailModule { }