import { CoreModule } from './../../core/core.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { AngularHttpRoutingModule } from './angular-http-routing.module';
import { AngularHttpComponent } from './angular-http.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggingInterceptorService } from './services/logging-interceptor.service';


@NgModule({
  declarations: [
    AngularHttpComponent
  ],
  imports: [
    CommonModule,
    AngularHttpRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    // CoreModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoggingInterceptorService,
    //   multi: true,
    // },
  ],
  
})
export class AngularHttpModule {
  // static forRoot(): ModuleWithProviders<any> {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [
  //        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  //     ]
  //   };
  // }
 }
