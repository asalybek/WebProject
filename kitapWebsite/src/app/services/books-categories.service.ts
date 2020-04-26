import { Injectable } from '@angular/core';
import {bookCategories, Category} from '../models/books-categories';
import {Observable, of} from 'rxjs';
import {Book} from '../models/books';
import {DashboardItems, dashList} from '../models/dashboard-items';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksCategoriesService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
  // getCategoryType(): Observable<Category[]>{
  //   return of(bookCategories);
  // }
  //
  // getBooks(id: number): Observable<Book>{
  //   return of(books.find(book => book.id === id));
  // }
  //
  // getBooksByCategory(name: string): Observable<Book[]> {
  //   return of(books.filter(book => book.book_category_name === name));
  // }
  getBooks(categoryId: number, id: number): Observable<Book>{
    return this.http.get<Book>(`${this.BASE_URL}/books/${categoryId}/all/${id}/`);
  }
  getBooksByCategory(id: number): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.BASE_URL}/books/${id}/all/`);
  }
  getCategoryType(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URL}/books/categories/`);
  }
  getBooksList(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.BASE_URL}/books/all/`);
  }
  setRating(rating: number, categoryId: number, id: number): Observable<Book>{
    return this.http.put<Book>(`${this.BASE_URL}/books/${categoryId}/all/${id}/`, {rating});
  }
  addBooks(): Observable<Book[]>{
    return this.http.post<Book[]>(`${this.BASE_URL}/books/all/`, {
      name: 'Test Book',
      poster: 'https://cdn.kitap.kz/storage//uploads/books/2208/Img_book.jpg',
      rating: 1,
    });
  }
  removeBooks(categoryId: number, id: number): Observable<Book>{
    return this.http.delete<Book>(`${this.BASE_URL}/books/${categoryId}/all/${id}/`);
  }
}
