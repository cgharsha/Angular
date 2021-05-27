import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptShorthandRoutingModule } from './javascript-shorthand-routing.module';
import { JavascriptShorthandComponent } from './javascript-shorthand.component';
import { SmartnshortJscodeComponent } from './smartnshort-jscode/smartnshort-jscode.component';


@NgModule({
  declarations: [
    JavascriptShorthandComponent,
    SmartnshortJscodeComponent
  ],
  imports: [
    CommonModule,
    JavascriptShorthandRoutingModule
  ]
})
export class JavascriptShorthandModule { }
