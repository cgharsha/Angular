import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineLoaderComponent } from '../components/inline-loader/inline-loader.component';
import { DialogLoaderComponent } from '../components/dialog-loader/dialog-loader.component';



@NgModule({
  declarations: [
    InlineLoaderComponent,
    DialogLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InlineLoaderComponent,
    DialogLoaderComponent
  ]
})
export class SharedModule { }
