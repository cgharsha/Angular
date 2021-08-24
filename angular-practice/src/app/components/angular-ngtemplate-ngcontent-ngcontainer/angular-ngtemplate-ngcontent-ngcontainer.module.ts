import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularNgtemplateNgcontentNgcontainerRoutingModule } from './angular-ngtemplate-ngcontent-ngcontainer-routing.module';
import { AngularNgtemplateNgcontentNgcontainerComponent } from './angular-ngtemplate-ngcontent-ngcontainer.component';


@NgModule({
  declarations: [
    AngularNgtemplateNgcontentNgcontainerComponent
  ],
  imports: [
    CommonModule,
    AngularNgtemplateNgcontentNgcontainerRoutingModule
  ]
})
export class AngularNgtemplateNgcontentNgcontainerModule { }
