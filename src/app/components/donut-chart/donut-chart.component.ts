import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  @Input() data: [];


public datalabel: Object;
public enableSmartLabels: boolean;
  constructor() { }

  ngOnInit(): void {
    this.datalabel = { visible: true, name: 'text', position: 'Outside' };
    this.enableSmartLabels = true;
    
  }
}
