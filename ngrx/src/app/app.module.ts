import { RecipeEffects } from './recipes/store/recipe.effects';
import { AuthEffects } from "./auth/store/auth.effects";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";
import { LoggingService } from "./logging.service";
import { StoreModule } from "@ngrx/store";
import { shoppingListReducer } from "./shopping-list/store/shopping-list.reducer";
import { authReducer } from "./auth/store/auth.reducer";
import * as fromApp from "./store/app.reducer";
import { EffectsModule } from "@ngrx/effects";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    // StoreModule.forRoot({
    //   shoppingList: shoppingListReducer,
    //   auth: authReducer,
    // }),
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, RecipeEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService]
})
export class AppModule {}
