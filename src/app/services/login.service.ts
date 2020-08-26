import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://localhost:5555';

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    console.log('Service page: ' + data.username);
    return this.http.post(this.baseUrl + `/user/login?username=${data.username}&password=${data.password}`, data);
  }
}
