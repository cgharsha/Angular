import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularServiceWorkersRoutingModule } from './angular-service-workers-routing.module';
import { AngularServiceWorkersComponent } from './angular-service-workers.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AngularServiceWorkersComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    AngularServiceWorkersRoutingModule
  ]
})
export class AngularServiceWorkersModule { }
