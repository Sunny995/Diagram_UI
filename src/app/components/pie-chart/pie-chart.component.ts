import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() data: [];

  public rawData = {};
  public rawData1 = [];
  public datalabel: Object;
  public enableSmartLabels: boolean;
  constructor(public service: DataService) { }

  ngOnInit(): void {
    this.datalabel = { visible: true, name: 'text', position: 'Outside' };
    this.enableSmartLabels = true;

  }

}
