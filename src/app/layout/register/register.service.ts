import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = 'https://localhost:44344/api/';

  constructor(private http: HttpClient) {}

  getUserPerson(json: string): Observable<any> {
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get<any[]>(this.apiUrl + 'Common/GetUserPerson', { params });
  }
}
