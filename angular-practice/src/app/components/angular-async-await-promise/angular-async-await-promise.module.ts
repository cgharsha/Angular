import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularAsyncAwaitPromiseRoutingModule } from './angular-async-await-promise-routing.module';
import { AngularAsyncAwaitPromiseComponent } from './angular-async-await-promise.component';


@NgModule({
  declarations: [
    AngularAsyncAwaitPromiseComponent
  ],
  imports: [
    CommonModule,
    AngularAsyncAwaitPromiseRoutingModule
  ]
})
export class AngularAsyncAwaitPromiseModule { }
