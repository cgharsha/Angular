import { AngularNgtemplateNgcontentNgcontainerComponent } from './angular-ngtemplate-ngcontent-ngcontainer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AngularNgtemplateNgcontentNgcontainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularNgtemplateNgcontentNgcontainerRoutingModule { }
