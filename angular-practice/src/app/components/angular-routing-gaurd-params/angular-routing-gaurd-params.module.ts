// import { ServerResolver } from './servers/server/server-resolver.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingGaurdParamsRoutingModule } from './angular-routing-gaurd-params-routing.module';
import { AngularRoutingGaurdParamsComponent } from './angular-routing-gaurd-params.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { CanDeactivateGaurd } from './servers/edit-server/can-deactivate-gaurd.service';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { AuthService } from './services/auth.service';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AngularRoutingGaurdParamsComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    ServerComponent,
    EditServerComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingGaurdParamsRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGaurdService,
    CanDeactivateGaurd,
    // ServerResolver
  ]
})
export class AngularRoutingGaurdParamsModule { }
