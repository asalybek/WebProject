import { Injectable } from '@angular/core';
import {comicCategoryList, ComicsCategories} from '../models/comics-categories';
import {Observable, of} from 'rxjs';
import {Comics} from '../models/comics';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }
  // getCategoryType(): Observable<ComicsCategories[]>{
  //   return of(comicCategoryList);
  // }
  // getComics(id: number): Observable<Comics>{
  //   return of(comicsList.find(comics => comics.id === id));
  // }
  // getComicsByCategory(name: string): Observable<Comics[]>{
  //   return of(comicsList.filter(comics => comics.comic_category_name === name));
  // }

  getComics(categoryId: number, id: number): Observable<Comics>{
    return this.http.get<Comics>(`${this.BASE_URL}/comics/${categoryId}/all/${id}/`);
  }
  getComicsByCategory(id: number): Observable<Comics[]>{
       return this.http.get<Comics[]>(`${this.BASE_URL}/comics/${id}/all/`);
  }
  getCategoryType(): Observable<ComicsCategories[]>{
    return this.http.get<ComicsCategories[]>(`${this.BASE_URL}/comics/categories/`);
  }
  getComicsList(): Observable<Comics[]>{
    return this.http.get<Comics[]>(`${this.BASE_URL}/comics/all/`);
  }
  setRating(rating: number, categoryId: number, id: number): Observable<Comics>{
    return this.http.put<Comics>(`${this.BASE_URL}/comics/${categoryId}/all/${id}/`, {rating});
  }
  addComics(): Observable<Comics[]>{
    return this.http.post<Comics[]>(`${this.BASE_URL}/comics/all/`, {
      name: 'Test Comics',
      poster: 'https://lh3.googleusercontent.com/-UvDy55qMXvE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuck0sSU4EY2_EktQWnW0kH3cVMTtaw.CMID/s48-c/photo.jpg',
      rating: 1,
    });
  }
  removeComics(categoryId: number, id: number): Observable<Comics>{
    return this.http.delete<Comics>(`${this.BASE_URL}/comics/${categoryId}/all/${id}/`);
  }
}
