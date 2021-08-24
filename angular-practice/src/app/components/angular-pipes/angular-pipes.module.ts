import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { AngularPipesRoutingModule } from './angular-pipes-routing.module';
import { AngularPipesComponent } from './angular-pipes.component';


@NgModule({
  declarations: [
    AngularPipesComponent
  ],
  imports: [
    CommonModule,
    AngularPipesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AngularPipesModule { }
