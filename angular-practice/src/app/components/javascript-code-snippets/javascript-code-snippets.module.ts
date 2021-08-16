import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptCodeSnippetsRoutingModule } from './javascript-code-snippets-routing.module';
import { JavascriptCodeSnippetsComponent } from './javascript-code-snippets.component';


@NgModule({
  declarations: [
    JavascriptCodeSnippetsComponent
  ],
  imports: [
    CommonModule,
    JavascriptCodeSnippetsRoutingModule
  ]
})
export class JavascriptCodeSnippetsModule { }
