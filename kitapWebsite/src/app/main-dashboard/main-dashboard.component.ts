import { Component, OnInit } from '@angular/core';
import {ComicsService} from '../comics.service';
import {Comics} from '../comics';
import {BooksCategoriesService} from '../books-categories.service';
import {Book} from '../books';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  comics: Comics[] = [];
  books: Book[] = [];
  constructor(private comicsService: ComicsService, private booksService: BooksCategoriesService) { }

  ngOnInit(): void {
    this.getComics();
    this.getBooks();
  }
  getComics(): void {
    this.comicsService.getAllComics()
      .subscribe(comics => this.comics = comics.slice(1, 7));
  }
  getBooks(): void {
    this.booksService.getAllBooks()
      .subscribe(books => this.books = books.slice(1, 7));
  }
}
