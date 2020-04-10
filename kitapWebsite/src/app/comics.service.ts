import { Injectable } from '@angular/core';
import {comicCategoryList, ComicsCategories} from './comics-categories';
import {Observable, of} from 'rxjs';
import {Comics, comicsList} from './comics';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  constructor() { }
  getCategoryType(): Observable<ComicsCategories[]>{
    return of(comicCategoryList);
  }
  getComics(id: number): Observable<Comics>{
    return of(comicsList.find(comics => comics.id === id));
  }
  getComicsByCategory(name: string): Observable<Comics[]>{
    return of(comicsList.filter(comics => comics.comic_category_name === name));
  }
}
