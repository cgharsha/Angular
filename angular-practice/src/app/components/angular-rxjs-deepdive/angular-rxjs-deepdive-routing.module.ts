import { AngularRxjsDeepdiveComponent } from './angular-rxjs-deepdive.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AngularRxjsDeepdiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRxjsDeepdiveRoutingModule { }
