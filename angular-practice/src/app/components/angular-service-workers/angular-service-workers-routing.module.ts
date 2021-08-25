import { AngularServiceWorkersComponent } from './angular-service-workers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  component: AngularServiceWorkersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularServiceWorkersRoutingModule { }
