import { Component, OnInit } from '@angular/core';
import {Category} from '../books-categories';
import {books} from '../books';
import {BooksCategoriesService} from '../books-categories.service';
import {allBooks, bookCategories} from '../books-categories';
import {books} from '../books';
@Component({
  selector: 'app-books-categories',
  templateUrl: './books-categories.component.html',
  styleUrls: ['./books-categories.component.css']
})
export class BooksCategoriesComponent implements OnInit {


  bookCategories: Category[];
 
  bookCategories = bookCategories;
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
