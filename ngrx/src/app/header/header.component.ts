

import { Component, OnInit, OnDestroy } from '@angular/core';
import { pipe, Subscription } from 'rxjs';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import * as fromApp from "../store/app.reducer";
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import  * as AuthActions from './../auth/store/auth.actions';
import * as RecipesActions from './../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    // this.userSub = this.authService.user.subscribe(user => {
      this.userSub = this.store.select('auth').pipe(map(authState => {
        return authState.user
      })).subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSaveData() {
    this.store.dispatch(new RecipesActions.StoreRecipe())
    // this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.store.dispatch(new RecipesActions.FetchRecipes())
    // this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
    // this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
