import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComicsService} from '../services/comics.service';
import {Comics} from '../models/comics';
import {comicCategoryList, ComicsCategories} from '../models/comics-categories';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {
  comicsProducts: Comics[];
  id;
  comicsCategoryList: ComicsCategories[];
  constructor(private route: ActivatedRoute, private service: ComicsService) { }

  ngOnInit(): void {
    this.getComicsCategoryList();
    this.getId();
    this.getComicsByCategory();
  }
  getId(): void{
    this.id = +this.route.snapshot.paramMap.get('category_id');
  }
  getComicsByCategory(): void{
    this.service.getComicsByCategory(this.id)
      .subscribe(comicsProducts => this.comicsProducts = comicsProducts);
  }
  getComicsCategoryList(): void{
    this.service.getCategoryType()
      .subscribe(comicsCategoryList => this.comicsCategoryList = comicsCategoryList);
  }

}
