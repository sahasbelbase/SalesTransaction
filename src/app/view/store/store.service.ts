import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class StoreService {
  apiUrl = 'https://localhost:44344/api/';

  constructor(public http: HttpClient) {}

  getStore(json: any):Observable<any> {
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl + 'Store/GetStore', { params });
  }

  setStore(json:any):Observable<any>{

    return this.http.post(this.apiUrl+'Store/StoreTsk',{
      json:JSON.stringify(json)
    })
  }
}
