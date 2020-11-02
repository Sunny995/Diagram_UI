import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsers } from '../interfaces/IData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url1 = 'https://api.covid19india.org/state_district_wise.json';
  private url2 = 'https://api.covid19india.org/v4/data.json';
  constructor(private http: HttpClient) { }

  getdata1(): Observable<Array<IUsers>> {
    return this.http.get<Array<IUsers>>(`${this.url1}`);
  }

  getdata2(): Observable<Array<IUsers>> {
    return this.http.get<Array<IUsers>>(`${this.url2}`);
  }
}
