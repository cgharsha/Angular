import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularObservablesComponent } from './angular-observables.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: AngularObservablesComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'user/:id', component: UserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularObservablesRoutingModule { }
