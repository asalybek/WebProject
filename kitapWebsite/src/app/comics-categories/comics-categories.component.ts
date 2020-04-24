import { Component, OnInit } from '@angular/core';
import { ComicsCategories} from '../comics-categories';
import { ComicsService} from '../comics.service';
import {Comics, comicsList} from '../comics';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comics-categories',
  templateUrl: './comics-categories.component.html',
  styleUrls: ['./comics-categories.component.css']
})
export class ComicsCategoriesComponent implements OnInit {
  comicsCategoryList: ComicsCategories[];
  name;
  comicsList = comicsList;
  constructor(private route: ActivatedRoute, private service: ComicsService) { }

  ngOnInit(): void {
    this.getComicsCategoryList();
  }
  getComicsCategoryList(): void{
    this.service.getCategoryType()
      .subscribe(comicsCategoryList => this.comicsCategoryList = comicsCategoryList);
  }
}
