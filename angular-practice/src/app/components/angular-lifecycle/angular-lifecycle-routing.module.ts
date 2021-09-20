import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularLifecycleComponent } from './angular-lifecycle.component';

const routes: Routes = [
  {path:'',
  component: AngularLifecycleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularLifecycleRoutingModule { }
