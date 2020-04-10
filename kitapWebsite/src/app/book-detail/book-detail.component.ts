import { Component, OnInit } from '@angular/core';
import {Book} from '../books';
import {BooksCategoriesService} from '../books-categories.service';
import {ActivatedRoute} from '@angular/router';
import { bookCategories } from '../books-categories';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  books: Book[];
  bookCategories = bookCategories;

  constructor(
    public bookscategoriesService: BooksCategoriesService,
    public routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    const id = +this.routes.snapshot.paramMap.get('categoryId');
    this.bookscategoriesService.getBooksByCategoryId(id).subscribe(b => this.books = b);
  }

}
