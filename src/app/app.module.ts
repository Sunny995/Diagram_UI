import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccumulationChartModule  } from '@syncfusion/ej2-angular-charts';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService,ColumnSeriesService, CategoryService} from '@syncfusion/ej2-angular-charts';
import { NavComponent } from './components/nav/nav.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import {  AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

import { DiagramModule,HierarchicalTreeService, DataBindingService } from '@syncfusion/ej2-angular-diagrams';
import { DiagramComponent } from './components/diagram/diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PieChartComponent,
    DonutChartComponent,
    BarGraphComponent,
    TableComponent,
    DiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AccumulationChartModule,ChartModule, 
    BrowserAnimationsModule,MatButtonModule,HttpClientModule,MatSelectModule
    ,MatFormFieldModule,MatSidenavModule,DiagramModule
  ],
  providers: [PieSeriesService,ColumnSeriesService, CategoryService,AccumulationDataLabelService,DataService,HierarchicalTreeService, DataBindingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
