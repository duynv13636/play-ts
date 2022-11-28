import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamelCaseComponent } from './pages/camel-case/camel-case.component';
import { FactorialComponent } from './pages/factorial/factorial.component';
import { QuadraticEquationComponent } from './pages/quadratic-equation/quadratic-equation.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

const routes: Routes = [
  {
    path:'',
    component:StatisticsComponent
  },
  {
    path:'bai-5',
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
