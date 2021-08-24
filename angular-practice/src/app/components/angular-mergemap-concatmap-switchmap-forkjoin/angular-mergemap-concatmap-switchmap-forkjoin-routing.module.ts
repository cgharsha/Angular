import { AngularMergemapConcatmapSwitchmapForkjoinComponent } from './angular-mergemap-concatmap-switchmap-forkjoin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AngularMergemapConcatmapSwitchmapForkjoinComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularMergemapConcatmapSwitchmapForkjoinRoutingModule {}
