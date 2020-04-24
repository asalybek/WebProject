import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResponse} from './loginResponse';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private httpClient: HttpClient) { }

  login(email, password): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.BASE_URL}/login/`, {
      username: email,
      password
    });
  }

}
