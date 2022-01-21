import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatSelectModule,
    MatSidenavModule,
  ]
})
export class MaterialModule { }
