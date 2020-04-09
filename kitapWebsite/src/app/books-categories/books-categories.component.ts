import { Component, OnInit } from '@angular/core';
import {bookCategories} from '../books-categories';

@Component({
  selector: 'app-books-categories',
  templateUrl: './books-categories.component.html',
  styleUrls: ['./books-categories.component.css']
})
export class BooksCategoriesComponent implements OnInit {

  bookCategories = bookCategories;

  constructor() { }

  ngOnInit(): void {
  }

}
