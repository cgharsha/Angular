import { AccountService } from './account.service';
import { LoggingService } from './logging.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularServiceRoutingModule } from './angular-service-routing.module';
import { AngularServiceComponent } from './angular-service.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';


@NgModule({
  declarations: [
    AngularServiceComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    CommonModule,
    AngularServiceRoutingModule
  ],
  providers:[LoggingService, AccountService]
})
export class AngularServiceModule { }
