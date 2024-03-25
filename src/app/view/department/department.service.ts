import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  apiUrl = 'https://localhost:44344/api/';

  constructor(public http: HttpClient) {}

  getDepartment(json: any):Observable<any> {
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl + 'Department/GetDepartment', { params });
  }

  setDepartment(json:any):Observable<any>{

    return this.http.post(this.apiUrl+'Department/DepartmentTsk',{
      json:JSON.stringify(json)
    })
  }
}
