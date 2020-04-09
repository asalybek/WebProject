import { Injectable } from '@angular/core';
import {bookCategories} from './books-categories';
import {Observable, of} from 'rxjs';
import {Book, books} from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksCategoriesService {

  bookCategories = bookCategories;

  getBooksByCategoryId(categoryId: number): Observable<Book[]> {
    return of(books.filter(b => this.bookCategories.find(c => c.id === categoryId).booksList.includes(b.id)));
  }

  constructor() { }
}
