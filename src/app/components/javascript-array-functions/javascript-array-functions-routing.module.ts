import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptArrayFunctionsComponent } from './javascript-array-functions.component';

const routes: Routes = [
  {
    path:'',
    component: JavascriptArrayFunctionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptArrayFunctionsRoutingModule { }
