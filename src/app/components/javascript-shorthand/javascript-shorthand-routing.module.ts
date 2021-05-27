import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptShorthandComponent } from "./javascript-shorthand.component";
import { SmartnshortJscodeComponent } from './smartnshort-jscode/smartnshort-jscode.component';

const routes: Routes = [{
  path:'',
  component: JavascriptShorthandComponent,
  children:[{
    path:'smart-and-short-jscode',
    component:SmartnshortJscodeComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptShorthandRoutingModule { }
