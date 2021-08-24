import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularConceptsRoutingModule } from './angular-concepts-routing.module';
import { AngularConceptsComponent } from './angular-concepts.component';
import { AngularConceptsDialogComponent } from './angular-concepts-dialog/angular-concepts-dialog.component';
import { AngularConceptsChildComponent } from './angular-concepts-child/angular-concepts-child.component';
import { DifferenceChangeNgmodelchangeComponent } from './difference-change-ngmodelchange/difference-change-ngmodelchange.component';
import { FormsModule } from '@angular/forms';
import { SplitTwoWayBindingComponent } from './split-two-way-binding/split-two-way-binding.component';


@NgModule({
  declarations: [
    AngularConceptsComponent,
    AngularConceptsDialogComponent,
    AngularConceptsChildComponent,
    DifferenceChangeNgmodelchangeComponent,
    SplitTwoWayBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularConceptsRoutingModule
  ]
})
export class AngularConceptsModule { }
