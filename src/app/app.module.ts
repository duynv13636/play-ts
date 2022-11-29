import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { FactorialComponent } from './pages/factorial/factorial.component';
import { QuadraticEquationComponent } from './pages/quadratic-equation/quadratic-equation.component';
import { CamelCaseComponent } from './pages/camel-case/camel-case.component';
import { TimeComponent } from './pages/time/time.component';
import { ReversDataComponent } from './pages/revers-data/revers-data.component';
import { BaiEightComponent } from './pages/bai-eight/bai-eight.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    FactorialComponent,
    QuadraticEquationComponent,
    CamelCaseComponent,
    TimeComponent,
    ReversDataComponent,
    BaiEightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
