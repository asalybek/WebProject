import { Component, OnInit } from '@angular/core';
import { ComicsCategories} from '../comics-categories';
import { ComicsService} from '../comics.service';

@Component({
  selector: 'app-comics-categories',
  templateUrl: './comics-categories.component.html',
  styleUrls: ['./comics-categories.component.css']
})
export class ComicsCategoriesComponent implements OnInit {
  comicsCategoryList: ComicsCategories[];
  constructor(private service: ComicsService) { }

  ngOnInit(): void {
    this.getComicsCategoryList();
  }
  getComicsCategoryList(): void{
    this.service.getCategoryType()
      .subscribe(comicsCategoryList => this.comicsCategoryList = comicsCategoryList);
  }
}