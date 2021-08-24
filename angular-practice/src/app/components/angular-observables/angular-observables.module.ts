import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { AngularObservablesRoutingModule } from './angular-observables-routing.module';
import { AngularObservablesComponent } from './angular-observables.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AngularObservablesComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AngularObservablesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AngularObservablesModule { }
