import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44344/api/';

  constructor(public http: HttpClient) {}

  getCustomer(json: any):Observable<any> {
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl + 'Customer/GetCustomer', { params });
  }

  setCustomer(json:any):Observable<any>{

    return this.http.post(this.apiUrl+'Customer/CustomerTsk',{
      json:JSON.stringify(json)
    })
  }
}
