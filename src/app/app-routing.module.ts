import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaiEightComponent } from './pages/bai-eight/bai-eight.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { CamelCaseComponent } from './pages/camel-case/camel-case.component';
import { EndsWithComponent } from './pages/ends-with/ends-with.component';
import { FactorialComponent } from './pages/factorial/factorial.component';
import { QuadraticEquationComponent } from './pages/quadratic-equation/quadratic-equation.component';
import { ReversDataComponent } from './pages/revers-data/revers-data.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { TimeComponent } from './pages/time/time.component';
import { UnionObjectComponent } from './pages/union-object/union-object.component';

const routes: Routes = [
  {
    path: 'bai-2',
    component: StatisticsComponent,
  },
  {
    path: 'bai-3',
    component: CamelCaseComponent,
  },
  {
    path: 'bai-5',
    component: EndsWithComponent,
  },
  {
    path: 'bai-6',
    component: TimeComponent,
  },
  {
    path: 'bai-7',
    component: CalculatorComponent,
  },
  {
    path: 'bai-8',
    component: BaiEightComponent,
  },
  {
    path: 'bai-9',
    component: QuadraticEquationComponent,
  },

  {
    path: 'bai-10',
    component: FactorialComponent,
  },

  {
    path: 'bai-11',
    component: ReversDataComponent,
  },

  {
    path: 'bai-12',
    component: UnionObjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
