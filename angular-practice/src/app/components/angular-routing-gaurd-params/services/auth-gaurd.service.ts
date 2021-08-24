import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
} from '@angular/router';

import { AuthService } from './auth.service';
import { Observable, of, from } from 'rxjs';

@Injectable()
// {
// providedIn: 'root',
// }
export class AuthGaurdService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // return false;
    return this.authService.isAuthenticated().then(
      () => {
        return true;
      }
    );
    // return this.authService.isAuthenticated().then((authenticated: boolean) => {
    //   if (authenticated) {
    //     return true;
    //   } else {
    //     this.router.navigate(['/']);
    //   }
    // });
  }

  canActivateChild(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(activatedRoute, state);
  }
}
