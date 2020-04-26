import { Component, OnInit } from '@angular/core';
import {Category} from '../models/books-categories';
import {Book} from '../models/books';
import {BooksCategoriesService} from '../services/books-categories.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books-categories',
  templateUrl: './books-categories.component.html',
  styleUrls: ['./books-categories.component.css']
})
export class BooksCategoriesComponent implements OnInit {
  booksCategories: Category[];
  name;
  booksList: Book[];

  constructor(private route: ActivatedRoute, private service: BooksCategoriesService) {}

  ngOnInit(): void {
    this.getBooks();
    this.getBooksCategoryList();
  }

  getBooksCategoryList(): void{
    this.service.getCategoryType()
      .subscribe(booksCategories => this.booksCategories = booksCategories);
  }

  getBooks(): void{
    this.service.getBooksList()
      .subscribe(booksProducts => this.booksList = booksProducts);
  }
  addBooks(): void{
    this.service.addBooks()
      .subscribe(booksList => this.booksList = booksList);
  }
}
