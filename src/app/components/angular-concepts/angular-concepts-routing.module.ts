import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularConceptsComponent } from './angular-concepts.component';

const routes: Routes = [
  {
    path:'',
    component: AngularConceptsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularConceptsRoutingModule { }
