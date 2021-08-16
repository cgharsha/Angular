import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptTipsComponent } from './javascript-tips.component';

const routes: Routes = [
  {
    path:'',
    component:JavascriptTipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptTipsRoutingModule { }
