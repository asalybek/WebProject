import { Component, OnInit } from '@angular/core';
import {Category} from '../books-categories';
import {books} from '../books';
import {BooksCategoriesService} from '../books-categories.service';

@Component({
  selector: 'app-books-categories',
  templateUrl: './books-categories.component.html',
  styleUrls: ['./books-categories.component.css']
})
export class BooksCategoriesComponent implements OnInit {
  bookCategories: Category[];
  allBooks = books;

  constructor(private service: BooksCategoriesService) {}

  ngOnInit(): void {
    this.getBooksCategoryList();
  }

  getBooksCategoryList(): void {
    this.service.getCategoryType()
      .subscribe(bookCategories => this.bookCategories = bookCategories);
  }
}
