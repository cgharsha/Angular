import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JavascriptMethodsComponent } from './javascript-methods.component';

const routes: Routes = [
  {
    path: '',
    component: JavascriptMethodsComponent
//    resolve:{
//      responseData: DataresolverService
//    }
    // children: [
    //   { path: 'overview', component: ScenarioComponent },
    // ],
  }
];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class JavascriptMethodsRoutingModule { }
