import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { AngularRxjsDeepdiveRoutingModule } from './angular-rxjs-deepdive-routing.module';
import { AngularRxjsDeepdiveComponent } from './angular-rxjs-deepdive.component';


@NgModule({
  declarations: [
    AngularRxjsDeepdiveComponent
  ],
  imports: [
    CommonModule,
    AngularRxjsDeepdiveRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AngularRxjsDeepdiveModule { }
