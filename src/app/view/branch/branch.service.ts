import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  apiUrl = 'https://localhost:44344/api/';

  constructor(public http: HttpClient) {}

  getBranch(json: any):Observable<any> {
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl + 'Branch/GetBranch', { params });
  }

  setBranch(json:any):Observable<any>{

    return this.http.post(this.apiUrl+'Branch/BranchTsk',{
      json:JSON.stringify(json)
    })
  }
}
