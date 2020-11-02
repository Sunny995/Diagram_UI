import { Component,ViewEncapsulation} from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
  public rawData1 = [];
  public stateData = [
    { x: 'CNF', text: 'Confirmed', y: 4184 },
    { x: 'DEC', text: 'Deceased', y: 57 },
    { x: 'REC', text: 'Recovered', y: 3937 },
    { x: 'TST', text: 'Tested', y: 78303 },];
    public stateTableData = [];

  constructor(public service: DataService) { }

  title = 'budhi-app';
  public Show = 'Diagram';

  showTable(value: string): void {
    if (value === 'Dashboard') {
      this.Show = 'Dashboard';
    } else if(value === 'Table'){
      this.Show = 'Table';
    }else{
      this.Show = 'Diagram';
    }
  }


  setStateData(stateCode: string): void {
    let arr = [];
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    this.service.getdata2()
      .subscribe(data => {

        Object.keys(data).map(function (key) {
          arr.push({ [key]: data[key] })
          return arr;
        });
        arr.forEach(u => {
          Object.keys(u).map(function (key) {
            if (key === stateCode) {
              arr1.push(u[key].total)
              arr2.push(u[key].districts);
            }

            return arr1;
          });
        });
        Object.keys(arr2[0]).map(function (key) {
          arr3.push({ name: key, 
            confirmed: arr2[0][key].total.confirmed ,
             deceased: arr2[0][key].total.deceased,
             recovered: arr2[0][key].total.recovered,
             tested: arr2[0][key].total.tested
            })
          return arr;
        });
        this.stateTableData = Object.assign([], arr3);
        this.stateData = [
          { x: 'CNF', text: 'Confirmed', y: arr1[0].confirmed },
          { x: 'DEC', text: 'Deceased', y:arr1[0].deceased },
          { x: 'REC', text: 'Recovered', y: arr1[0].recovered },
          { x: 'TST', text: 'Tested', y: arr1[0].tested },];
      });
  }

}
