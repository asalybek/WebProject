import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComicsService} from '../comics.service';
import {Comics} from '../comics';
import {comicCategoryList} from '../comics-categories';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {
  comicsProducts: Comics[];
  name;
  comicsCategoryList = comicCategoryList;

  constructor(private route: ActivatedRoute, private service: ComicsService) { }

  ngOnInit(): void {
    this.getId();
    this.getComicsByCategory();
  }
  getId(): void{
    this.name = this.route.snapshot.paramMap.get('comic_category_name');
  }
  getComicsByCategory(): void{
    this.service.getComicsByCategory(this.name)
      .subscribe(comicsProducts => this.comicsProducts = comicsProducts);
  }

}
