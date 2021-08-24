import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineLoaderComponent } from '../../components/inline-loader/inline-loader.component';
import { DialogLoaderComponent } from '../../components/dialog-loader/dialog-loader.component';
import { ShortenPipe } from './../pipes/shorten.pipe';
import { FilterPipe } from './../pipes/filter.pipe';
import { SortPipe } from './../pipes/sort.pipe';
import { ReversePipe } from './../pipes/reverse.pipe';





@NgModule({
  declarations: [
    InlineLoaderComponent,
    DialogLoaderComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InlineLoaderComponent,
    DialogLoaderComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe
  ]
})
export class SharedModule { }
