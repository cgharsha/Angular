import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptCodeSnippetsComponent } from './javascript-code-snippets.component';

const routes: Routes = [
  {
    path:'',
    component:JavascriptCodeSnippetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptCodeSnippetsRoutingModule { }
