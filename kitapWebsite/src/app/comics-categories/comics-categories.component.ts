import { Component, OnInit } from '@angular/core';
import { ComicsCategories} from '../models/comics-categories';
import { ComicsService} from '../services/comics.service';
import {ActivatedRoute} from '@angular/router';
import {Comics} from '../models/comics';

@Component({
  selector: 'app-comics-categories',
  templateUrl: './comics-categories.component.html',
  styleUrls: ['./comics-categories.component.css']
})
export class ComicsCategoriesComponent implements OnInit {
  comicsCategoryList: ComicsCategories[];
  name;
  comicsList: Comics[];
  constructor(private route: ActivatedRoute, private service: ComicsService) { }

  ngOnInit(): void {
    this.getComics();
    this.getComicsCategoryList();
  }
  getComicsCategoryList(): void{
    this.service.getCategoryType()
      .subscribe(comicsCategoryList => this.comicsCategoryList = comicsCategoryList);
  }

  getComics(): void{
    this.service.getComicsList()
      .subscribe(comicsProducts => this.comicsList = comicsProducts);
  }
  addComics(): void{
    this.service.addComics()
      .subscribe(comicsList => this.comicsList = comicsList);
  }
}
