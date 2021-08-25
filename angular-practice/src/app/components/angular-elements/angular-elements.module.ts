import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularElementsRoutingModule } from './angular-elements-routing.module';
import { AngularElementsComponent } from './angular-elements.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AngularElementsComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    AngularElementsRoutingModule
  ],
  // entryComponents: [AlertComponent]
})
export class AngularElementsModule { }
