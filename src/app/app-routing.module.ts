import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactorialComponent } from './pages/factorial/factorial.component';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
