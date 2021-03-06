import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: [];
// renderedList = [
//   {
//       "date": "",
//       "name": "Competitive Intelligence",
//       "total_entities": "0",
//       "details": []
//   },{
//       "date": "",
//       "name": "My Vendors",
//       "total_entities": "0",
//       "details": []
//   },{
//       "date": "",
//       "name": "My Customers",
//       "total_entities": "0",
//       "details": []
//   },{
//       "date": "Jul 23",
//       "name": "Test_30_Results",
//       "total_entities": "28",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria"]
//   },{
//       "date": "Jun 28",
//       "name": "To_Index",
//       "total_entities": "100",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria","Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria"]
//   },{
//       "date": "Apr 10",
//       "name": "KPMG requested Companies- Listed Set_Prasada Kumar",
//       "total_entities": "34",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria"]
//   },{
//       "date": "Mar 12",
//       "name": "Error Case LTB To EBITDA Blank_Prasad Kumar",
//       "total_entities": "24",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria"]
//   },{
//       "date": "Dec 14",
//       "name": "Two Companies",
//       "total_entities": "2",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania"]
//   },{
//       "date": "Nov 01",
//       "name": "Custom",
//       "total_entities": "30",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria","Romania","Hungary","Austria"]
//   },{
//       "date": "Oct 29",
//       "name": "Mumbai",
//       "total_entities": "3",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria"]
//   },{
//       "date": "Feb 1",
//       "name": "ghesa",
//       "total_entities": "28",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary"]
//   },{
//       "date": "Feb 1",
//       "name": "Egon Spengler",
//       "total_entities": "28",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria"]
//   },{
//       "date": "Feb 1",
//       "name": "Egon Spengler",
//       "total_entities": "28",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria"]
//   },{
//       "date": "Feb 1",
//       "name": "Egon Spengler",
//       "total_entities": "28",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria"]
//   },{
//       "date": "Feb 1",
//       "name": "Egon Spengler",
//       "total_entities": "28",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria"]
//   },{
//       "date": "Feb 1",
//       "name": "ghesa",
//       "total_entities": "28",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria"]
//   },{
//       "date": "Feb 1",
//       "name": "Egon Spengler",
//       "total_entities": "28",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria"]
//   },{
//       "date": "Feb 1",
//       "name": "Egon Spengler",
//       "total_entities": "28",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria"]
//   },{
//       "date": "Feb 1",
//       "name": "Egon Spengler",
//       "total_entities": "28",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria"]
//   },{
//       "date": "Feb 1",
//       "name": "Egon Spengler",
//       "total_entities": "28",
//       "details": [ "Deewan Housing Finance Corporation Limited", "Romania","Hungary","Austria", "Romania","Hungary","Austria", "Romania","Hungary","Austria", "Romania","Hungary","Austria", "Romania","Hungary","Austria", "Romania","Hungary","Austria", "Romania","Hungary","Austria"]
//   }
  
// ];
  constructor() { }

  ngOnInit(): void {
  }

}
