import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { FactorialComponent } from './pages/factorial/factorial.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    FactorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
