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
    { path:'', redirectTo:'', pathMatch:'full'},
    { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
