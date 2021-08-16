import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptTipsRoutingModule } from './javascript-tips-routing.module';
import { JavascriptTipsComponent } from './javascript-tips.component';


@NgModule({
  declarations: [
    JavascriptTipsComponent
  ],
  imports: [
    CommonModule,
    JavascriptTipsRoutingModule
  ]
})
export class JavascriptTipsModule { }
