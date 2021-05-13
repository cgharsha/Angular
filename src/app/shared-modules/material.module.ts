import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSlideToggleModule
  ],
  exports: [
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
