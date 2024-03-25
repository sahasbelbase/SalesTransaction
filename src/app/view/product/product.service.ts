import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44344/api/';

  constructor(public http: HttpClient) {}

  getProduct(json: any):Observable<any> {
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl + 'Product/GetProduct', { params });
  }

  setProduct(json:any):Observable<any>{

    return this.http.post(this.apiUrl+'Product/ProductTsk',{
      json:JSON.stringify(json)
    })
  }
}
