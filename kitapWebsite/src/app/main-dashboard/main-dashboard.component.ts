import { Component, OnInit } from '@angular/core';
import {ComicsService} from '../services/comics.service';
import {Comics} from '../models/comics';
import {BooksCategoriesService} from '../services/books-categories.service';
import {Book} from '../models/books';
import {DashboardItems} from '../models/dashboard-items';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  dashItems: DashboardItems[] = [];
  constructor(private booksService: BooksCategoriesService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.booksService.getAllItems()
      .subscribe(dashItems => this.dashItems = dashItems.slice(0, 14));
  }
}
