import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularDirectivesRoutingModule } from './angular-directives-routing.module';
import { AngularDirectivesComponent } from './angular-directives.component';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { UnlessDirective } from './unless.directive';


@NgModule({
  declarations: [
    AngularDirectivesComponent,
    BetterHighlightDirective,
    BasicHighlightDirective,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    AngularDirectivesRoutingModule
  ]
})
export class AngularDirectivesModule { }
