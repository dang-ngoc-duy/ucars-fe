import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrandDetailComponent } from "./brand-detail.component";

const routes: Routes = [
    { path: '', component: BrandDetailComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BrandDetailRoutingModule { }