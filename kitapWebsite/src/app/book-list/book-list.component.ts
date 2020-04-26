import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Book } from '../models/books';
import { BooksCategoriesService } from '../services/books-categories.service';
import {Category} from '../models/books-categories';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  booksProducts: Book[];
  id;
  booksCategories: Category[];

  constructor(private route: ActivatedRoute, private service: BooksCategoriesService  ) { }

  ngOnInit(): void {
    this.getBooksCategoryList();
    this.getId();
    this.getBooksByCategory();
  }

  getId(): void{
    this.id = +this.route.snapshot.paramMap.get('category_id');
  }
  getBooksByCategory(): void{
    this.service.getBooksByCategory(this.id)
      .subscribe(booksProducts => this.booksProducts = booksProducts);
  }
  getBooksCategoryList(): void{
    this.service.getCategoryType()
      .subscribe(booksCategories => this.booksCategories = booksCategories);
  }

}
