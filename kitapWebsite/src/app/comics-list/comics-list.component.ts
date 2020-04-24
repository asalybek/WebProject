import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComicsService} from '../comics.service';
import {Comics, Comics1} from '../comics';
import {comicCategoryList} from '../comics-categories';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {
  comicsProducts: Comics1[];
  id;
  comicsCategoryList = comicCategoryList;

  constructor(private route: ActivatedRoute, private service: ComicsService) { }

  ngOnInit(): void {
    this.getId();
    this.getComicsByCategory();
  }
  getId(): void{
    this.id = +this.route.snapshot.paramMap.get('id');
  }
  getComicsByCategory(): void{
    this.service.getComicsByCategory(this.id)
      .subscribe(comicsProducts => this.comicsProducts = comicsProducts);
  }

}
