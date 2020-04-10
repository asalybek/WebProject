import { Component, OnInit } from '@angular/core';
import {ComicsService} from '../comics.service';
import {Comics} from '../comics';
import {BooksCategoriesService} from '../books-categories.service';
import {Book} from '../books';
import {DashboardItems} from '../dashboard-items';

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
