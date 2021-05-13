import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptOneLinersRoutingModule } from './javascript-one-liners-routing.module';
import { JavascriptOneLinersComponent } from './javascript-one-liners.component';


@NgModule({
  declarations: [
    JavascriptOneLinersComponent
  ],
  imports: [
    CommonModule,
    JavascriptOneLinersRoutingModule
  ]
})
export class JavascriptOneLinersModule { }
