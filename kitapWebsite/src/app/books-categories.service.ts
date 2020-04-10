import { Injectable } from '@angular/core';
import {bookCategories, Category} from './books-categories';
import {Observable, of} from 'rxjs';
import {Book, books} from './books';
import {Comics, comicsList} from './comics';
import {DashboardItems, dashList} from './dashboard-items';

@Injectable({
  providedIn: 'root'
})
export class BooksCategoriesService {

  getCategoryType(): Observable<Category[]>{
    return of(bookCategories);
  }

  getBooks(id: number): Observable<Book>{
    return of(books.find(comics => comics.id === id));
  }

  getBooksByCategory(name: string): Observable<Book[]> {
    return of(books.filter(comics => comics.book_category_name === name));
  }
  getAllItems(): Observable<DashboardItems[]>{
    return of(dashList);
  }
  constructor() { }
}
