import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptOneLinersComponent } from './javascript-one-liners.component';

const routes: Routes = [
  {
    path:'',
    component: JavascriptOneLinersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptOneLinersRoutingModule { }
