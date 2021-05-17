import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptArrayFunctionsRoutingModule } from './javascript-array-functions-routing.module';
import { JavascriptArrayFunctionsComponent } from './javascript-array-functions.component';


@NgModule({
  declarations: [
    JavascriptArrayFunctionsComponent
  ],
  imports: [
    CommonModule,
    JavascriptArrayFunctionsRoutingModule
  ]
})
export class JavascriptArrayFunctionsModule { }
