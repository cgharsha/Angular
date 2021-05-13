import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptShorthandRoutingModule } from './javascript-shorthand-routing.module';
import { JavascriptShorthandComponent } from './javascript-shorthand.component';


@NgModule({
  declarations: [
    JavascriptShorthandComponent
  ],
  imports: [
    CommonModule,
    JavascriptShorthandRoutingModule
  ]
})
export class JavascriptShorthandModule { }
