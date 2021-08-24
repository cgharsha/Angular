// import { ServerResolver } from './servers/server/server-resolver.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { AngularRoutingGaurdParamsComponent } from './angular-routing-gaurd-params.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { CanDeactivateGaurd } from './servers/edit-server/can-deactivate-gaurd.service';
import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [
  {
    path: '',
    component: AngularRoutingGaurdParamsComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: ':id/:name',
            component: UserComponent,
          },
        ],
      },
      {
        path: 'servers',
        canActivateChild: [AuthGaurdService],
        canActivate: [AuthGaurdService],
        component: ServersComponent,
        children: [
          {
            path: ':id',
            component: ServerComponent,
            // resolve: {server: ServerResolver}
          },
          {
            path: ':id/edit',
            component: EditServerComponent,
            canDeactivate: [CanDeactivateGaurd]
          },
        ],
      },
      {
        path: 'not-found',
        component: ErrorPageComponent,
        data: {message: 'Page not found!'}
      },
      { path: '**', redirectTo: 'not-found' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingGaurdParamsRoutingModule {}
