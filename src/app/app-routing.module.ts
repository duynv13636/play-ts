import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaiEightComponent } from './pages/bai-eight/bai-eight.component';
import { CamelCaseComponent } from './pages/camel-case/camel-case.component';
import { EndsWithComponent } from './pages/ends-with/ends-with.component';
import { FactorialComponent } from './pages/factorial/factorial.component';
import { QuadraticEquationComponent } from './pages/quadratic-equation/quadratic-equation.component';
import { ReversDataComponent } from './pages/revers-data/revers-data.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { TimeComponent } from './pages/time/time.component';

const routes: Routes = [
  {
    path:'',
    component:StatisticsComponent
  },
  {
    path:'bai-10',
    component:FactorialComponent
  },
  {
    path:'bai-9',
    component:QuadraticEquationComponent
  },
  {
    path:'bai-2',
    component:CamelCaseComponent
  },
  {
    path:'bai-6',
    component:TimeComponent
  },
  {
    path:'bai-11',
    component:ReversDataComponent
  },
  {
    path:'bai-8',
    component:BaiEightComponent
  },
  {
    path:'bai-5',
    component:EndsWithComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
