import { Component, OnInit } from '@angular/core';
import {ComicsService} from '../services/comics.service';
import {Comics} from '../models/comics';
import {BooksCategoriesService} from '../services/books-categories.service';
import {Book} from '../models/books';
import {DashboardItems} from '../models/dashboard-items';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  topComics: Comics[];
  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.getComics();
  }
  getComics(): void {
    this.service.getTopSixComics()
      .subscribe(dashItems => this.topComics = dashItems);
  }
}
