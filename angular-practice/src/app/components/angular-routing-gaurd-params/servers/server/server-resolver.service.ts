import { Injectable } from '@angular/core';

import { ServersService } from './../../services/servers.service';
import { Observable } from 'rxjs';

import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

interface Server {
  id: number;
  name: string;
  status: string;
}
@Injectable()
export class ServerResolver
  implements Resolve<{ id: number; name: string; status: string }>
{
  constructor(private serversService: ServersService) {}
  resolve(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(+activatedRoute.params['id']);
  }
}
