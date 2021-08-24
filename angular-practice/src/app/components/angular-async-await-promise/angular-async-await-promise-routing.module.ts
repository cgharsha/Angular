import { AngularAsyncAwaitPromiseComponent } from './angular-async-await-promise.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AngularAsyncAwaitPromiseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularAsyncAwaitPromiseRoutingModule {}
