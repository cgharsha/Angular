import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularConceptsRoutingModule } from './angular-concepts-routing.module';
import { AngularConceptsComponent } from './angular-concepts.component';


@NgModule({
  declarations: [
    AngularConceptsComponent
  ],
  imports: [
    CommonModule,
    AngularConceptsRoutingModule
  ]
})
export class AngularConceptsModule { }
