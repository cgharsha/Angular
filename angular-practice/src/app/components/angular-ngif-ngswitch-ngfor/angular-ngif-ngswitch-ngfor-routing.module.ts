import { AngularNgifNgswitchNgforComponent } from './angular-ngif-ngswitch-ngfor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AngularNgifNgswitchNgforComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularNgifNgswitchNgforRoutingModule { }
