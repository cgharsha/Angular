import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularConceptsRoutingModule } from './angular-concepts-routing.module';
import { AngularConceptsComponent } from './angular-concepts.component';
import { AngularConceptsDialogComponent } from './angular-concepts-dialog/angular-concepts-dialog.component';
import { AngularConceptsChildComponent } from './angular-concepts-child/angular-concepts-child.component';


@NgModule({
  declarations: [
    AngularConceptsComponent,
    AngularConceptsDialogComponent,
    AngularConceptsChildComponent
  ],
  imports: [
    CommonModule,
    AngularConceptsRoutingModule
  ]
})
export class AngularConceptsModule { }
