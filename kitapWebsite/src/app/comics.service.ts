import { Injectable } from '@angular/core';
import {comicCategoryList, ComicsCategories} from './comics-categories';
import {Observable, of} from 'rxjs';
import {Comics, Comics1, comicsList} from './comics';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }
  getCategoryType(): Observable<ComicsCategories[]>{
    return of(comicCategoryList);
  }
  getComics(id: number): Observable<Comics>{
    return of(comicsList.find(comics => comics.id === id));
  }
  // getComicsByCategory(name: string): Observable<Comics[]>{
  //   return of(comicsList.filter(comics => comics.comic_category_name === name));
  // }
  getComicsByCategory(id: number): Observable<Comics1[]> {
    return this.http.get<Comics1[]>(`${this.BASE_URL}/comics/${id}/all`);
  }
}
