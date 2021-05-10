import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptMethodsRoutingModule } from './javascript-methods-routing.module'
import { JavascriptMethodsComponent } from './javascript-methods.component';



@NgModule({
  declarations: [
    JavascriptMethodsComponent
  ],
  imports: [
    JavascriptMethodsRoutingModule,
    CommonModule
  ]
})
export class JavascriptMethodsModule { }
