import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() showTableTemplate = new EventEmitter<string>();
  @Output() stateCode = new EventEmitter<string>();
  public rawData={};
  public rawData1=[];
  public list=[];
    constructor(public service: DataService) { }

  ngOnInit(): void {
    this.service.getdata1()
      .subscribe(data => {
        this.rawData1 = JSON.parse(JSON.stringify(data));
        
        let arr = [];  
Object.keys(data).map(function(key){  
    arr.push({[key]:data[key]})  
    return arr;  
}); 
      this.rawData1=arr;
      let arr1 = [];  
       this.rawData1.forEach(u=>{console.log(u.districtData);
        Object.keys(u).map(function(key){  
          if( key != "State Unassigned"){
            arr1.push({name: key , code: u[key].statecode});
            
          }
         
          
          return arr1;  
      }); 
     
      });
      arr1.forEach(val => this.list.push(Object.assign({}, val)));
      
      });

  }
  

  doSomething(value:any): void {
    this.stateCode.emit(value);
  }

  showDashboard(): void {
    this.showTableTemplate.emit('Dashboard');
  }

  showTable(): void {
    this.showTableTemplate.emit('Table');
  }
  showDiagram(): void {
    this.showTableTemplate.emit('Diagram');
  }
}
