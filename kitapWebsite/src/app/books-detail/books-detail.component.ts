import { Component, OnInit } from '@angular/core';
import {Book} from '../books';
import {ActivatedRoute} from '@angular/router';
import {BooksCategoriesService} from '../books-categories.service';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  books: Book;

  constructor(private route: ActivatedRoute, private service: BooksCategoriesService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getBooks(id).subscribe(books => this.books = books);
  }
}
