import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  @Input() data: [];

public primaryXAxis: Object = {
  valueType: 'Category',
   
};
  constructor() { }

  ngOnInit(): void {
  }

}
