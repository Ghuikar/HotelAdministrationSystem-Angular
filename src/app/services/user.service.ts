import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.apiUrl;

  signup(data: any, endpoint: string):Observable<any> {
    const url = this.baseUrl + endpoint;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, data, { headers });
  }


  forgetPassword(data: any, endpoint: string): Observable<any> {
    const url = this.baseUrl + endpoint;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, data, { headers });
  }

}
