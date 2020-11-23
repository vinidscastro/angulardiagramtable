import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagramComponent } from './diagram/diagram.component';
import { TableComponent } from './table/table.component';
import { ProgressRingComponent } from './progress-ring/progress-ring.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    TableComponent,
    ProgressRingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
