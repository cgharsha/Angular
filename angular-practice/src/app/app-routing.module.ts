import { AngularServiceWorkersModule } from './components/angular-service-workers/angular-service-workers.module';
import { AngularPipesModule } from './components/angular-pipes/angular-pipes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'javascript-methods',
    loadChildren: () =>
      import('./components/javascript-methods/javascript-methods.module').then(
        (m) => m.JavascriptMethodsModule
      ),
    //        data: {preload: true}  // Preload only this module
  },
  {
    path: 'javascript-shorthands',
    loadChildren: () =>
      import(
        './components/javascript-shorthand/javascript-shorthand.module'
      ).then((m) => m.JavascriptShorthandModule),
  },
  {
    path: 'javascript-one-liners',
    loadChildren: () =>
      import(
        './components/javascript-one-liners/javascript-one-liners.module'
      ).then((m) => m.JavascriptOneLinersModule),
  },
  {
    path: 'javascript-tips',
    loadChildren: () =>
      import('./components/javascript-tips/javascript-tips.module').then(
        (m) => m.JavascriptTipsModule
      ),
  },
  {
    path: 'angular-concepts',
    loadChildren: () =>
      import('./components/angular-concepts/angular-concepts.module').then(
        (m) => m.AngularConceptsModule
      ),
  },
  {
    path: 'javascript-code-snippets',
    loadChildren: () =>
      import(
        './components/javascript-code-snippets/javascript-code-snippets.module'
      ).then((m) => m.JavascriptCodeSnippetsModule),
  },
  {
    path: 'javascript-array-functions',
    loadChildren: () =>
      import(
        './components/javascript-array-functions/javascript-array-functions.module'
      ).then((m) => m.JavascriptArrayFunctionsModule),
  },
  {
    path: 'search-methods',
    loadChildren: () =>
      import(
        './components/search-functionality/search-functionality.module'
      ).then((m) => m.SearchFunctionalityModule),
  },
  {
    path: 'angular-http',
    loadChildren: () =>
      import('./components/angular-http/angular-http.module').then(
        (m) => m.AngularHttpModule
      ),
  },
  {
    path: 'angular-pipes',
    loadChildren: () =>
      import('./components/angular-pipes/angular-pipes.module').then(
        (m) => m.AngularPipesModule
      ),
  },
  {
    path: 'angular-observables',
    loadChildren: () =>
      import(
        './components/angular-observables/angular-observables.module'
      ).then((m) => m.AngularObservablesModule),
  },
  {
    path: 'angular-rxjs-deepdive',
    loadChildren: () =>
      import(
        './components/angular-rxjs-deepdive/angular-rxjs-deepdive.module'
      ).then((m) => m.AngularRxjsDeepdiveModule),
  },
  {
    path: 'angular-async-await-promise',
    loadChildren: () =>
      import(
        './components/angular-async-await-promise/angular-async-await-promise.module'
      ).then((m) => m.AngularAsyncAwaitPromiseModule),
  },
  {
    path: 'angular-mergemap-concatmap-switchmap-forkjoin',
    loadChildren: () =>
      import(
        './components/angular-mergemap-concatmap-switchmap-forkjoin/angular-mergemap-concatmap-switchmap-forkjoin.module'
      ).then((m) => m.AngularMergemapConcatmapSwitchmapForkjoinModule),
  },
  {
    path: 'angular-ngtemplate-ngcontent-ngcontainer',
    loadChildren: () =>
      import(
        './components/angular-ngtemplate-ngcontent-ngcontainer/angular-ngtemplate-ngcontent-ngcontainer.module'
      ).then((m) => m.AngularNgtemplateNgcontentNgcontainerModule),
  },
  {
    path: 'angular-routing-gaurd-params',
    loadChildren: () =>
      import(
        './components/angular-routing-gaurd-params/angular-routing-gaurd-params.module'
      ).then((m) => m.AngularRoutingGaurdParamsModule),
  },
  {
    path: 'angular-ngif-ngswitch-ngfor',
    loadChildren: () =>
      import(
        './components/angular-ngif-ngswitch-ngfor/angular-ngif-ngswitch-ngfor.module'
      ).then((m) => m.AngularNgifNgswitchNgforModule),
  },
  {
    path: 'angular-offline-capabilties-service-workers',
    loadChildren: () =>
      import(
        './components/angular-service-workers/angular-service-workers.module'
      ).then((m) => m.AngularServiceWorkersModule),
  },
  {
    path: 'angular-elements',
    loadChildren: () =>
      import(
        './components/angular-elements/angular-elements.module'
      ).then((m) => m.AngularElementsModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
