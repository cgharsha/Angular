import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptShorthandComponent } from "./javascript-shorthand.component";

const routes: Routes = [{
  path:'',
  component: JavascriptShorthandComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptShorthandRoutingModule { }
