import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../models/books';
import {ActivatedRoute} from '@angular/router';
import {BooksCategoriesService} from '../services/books-categories.service';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  @Input() bookItem: Book;

  constructor(private route: ActivatedRoute, private service: BooksCategoriesService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    const id = +this.route.snapshot.paramMap.get('id');
    const categoryId = +this.route.snapshot.paramMap.get('category_id');
    this.service.getBooks(categoryId, id).subscribe(bookItem => this.bookItem = bookItem);
  }
  setRating(){
    const id = +this.route.snapshot.paramMap.get('id');
    const categoryId = +this.route.snapshot.paramMap.get('category_id');
    console.log(this.bookItem.rating);
    this.service.setRating(this.bookItem.rating, categoryId, id).subscribe(bookItem => this.bookItem = bookItem);
  }
  removeBooks(){
    const id = +this.route.snapshot.paramMap.get('id');
    const categoryId = +this.route.snapshot.paramMap.get('category_id');
    this.service.removeBooks(categoryId, id).subscribe(bookItem => this.bookItem = bookItem);
  }
}
