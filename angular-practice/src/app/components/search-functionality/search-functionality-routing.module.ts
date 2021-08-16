import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFunctionalityComponent } from './search-functionality.component';

const routes: Routes = [
  {
    path:'',
    component:SearchFunctionalityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchFunctionalityRoutingModule { }
