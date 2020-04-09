import { Injectable } from '@angular/core';
import {comicCategoryList, ComicsCategories} from './comics-categories';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  getCategoryType(): Observable<ComicsCategories[]>{
    return of(comicCategoryList);
  }
  constructor() { }
}
