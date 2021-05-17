import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


const routes: Routes = [
    {
        path:'',
        loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path:'javascript-methods',
        loadChildren: () => import('./components/javascript-methods/javascript-methods.module').then(m => m.JavascriptMethodsModule),
//        data: {preload: true}  // Preload only this module
    },
    {
        path:'javascript-shorthands',
        loadChildren: () => import('./components/javascript-shorthand/javascript-shorthand.module').then(m => m.JavascriptShorthandModule)
    },
    {
        path:'javascript-one-liners',
        loadChildren: () => import('./components/javascript-one-liners/javascript-one-liners.module').then(m =>m.JavascriptOneLinersModule)
    },
    {
        path:'javascript-tips',
        loadChildren: () => import('./components/javascript-tips/javascript-tips.module').then(m => m.JavascriptTipsModule)
    },
    {
        path:'angular-concepts',
        loadChildren: () => import('./components/angular-concepts/angular-concepts.module').then(m => m.AngularConceptsModule)
    },
    {
        path:'javascript-code-snippets',
        loadChildren: () => import('./components/javascript-code-snippets/javascript-code-snippets.module').then(m => m.JavascriptCodeSnippetsModule)
    },
    {
        path:'javascript-array-functions',
        loadChildren: () => import('./components/javascript-array-functions/javascript-array-functions.module').then(m => m.JavascriptArrayFunctionsModule)
    },
    { path:'', redirectTo:'', pathMatch:'full'},
    { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
