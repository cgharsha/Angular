import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchFunctionalityRoutingModule } from './search-functionality-routing.module';
import { SearchFunctionalityComponent } from './search-functionality.component';
import { SearchWithDelayComponent } from './search-with-delay/search-with-delay.component';
import { SearchWithPipeComponent } from './search-with-pipe/search-with-pipe.component';
import { SearchWithOptionComponent } from './search-with-option/search-with-option.component';
import { SearchWithPipeArrayComponent } from './search-with-pipe-array/search-with-pipe-array.component';
import { SearchArrayPipe } from 'src/app/shared/pipes/search-array.pipe';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';




@NgModule({
  declarations: [
    SearchFunctionalityComponent,
    SearchWithDelayComponent,
    SearchWithPipeComponent,
    SearchWithOptionComponent,
    SearchWithPipeArrayComponent,
    SearchPipe,
    SearchArrayPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchFunctionalityRoutingModule
  ]
})
export class SearchFunctionalityModule { }
