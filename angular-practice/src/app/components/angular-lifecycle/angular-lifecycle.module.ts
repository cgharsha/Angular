import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularLifecycleRoutingModule } from './angular-lifecycle-routing.module';
import { AngularLifecycleComponent } from './angular-lifecycle.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AngularLifecycleComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    AngularLifecycleRoutingModule
  ]
})
export class AngularLifecycleModule { }
