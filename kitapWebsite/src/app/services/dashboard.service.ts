import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {LoginResponse} from '../models/loginResponse';
import {Comics} from '../models/comics';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  BASE_URL = 'http://127.0.0.1:8000';
  logged = false;
  constructor(private httpClient: HttpClient) { }

  login(username, password): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.BASE_URL}/login/`, {
      username,
      password
    });
  }
  getTopSixComics(): Observable<Comics[]>{
    return this.httpClient.get<Comics[]>(`${this.BASE_URL}/comics/top-six/`);
  }
}
