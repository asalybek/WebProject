import { Component, OnInit, Input } from '@angular/core';
import { Comics} from '../models/comics';
import {ComicsService} from '../services/comics.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comics-detail',
  templateUrl: './comics-detail.component.html',
  styleUrls: ['./comics-detail.component.css']
})
export class ComicsDetailComponent implements OnInit {
  @Input() comics: Comics;
  constructor(private route: ActivatedRoute, private service: ComicsService) { }
  ngOnInit(): void {
    this.getComics();
  }
  // getComics(){
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.service.getComics(id).subscribe(comics => this.comics = comics);
  // }
  getComics(){
    const id = +this.route.snapshot.paramMap.get('id');
    const categoryId = +this.route.snapshot.paramMap.get('category_id');
    this.service.getComics(categoryId, id).subscribe(comics => this.comics = comics);
  }
  setRating(){
    const id = +this.route.snapshot.paramMap.get('id');
    const categoryId = +this.route.snapshot.paramMap.get('category_id');
    console.log(this.comics.rating);
    this.service.setRating(this.comics.rating, categoryId, id).subscribe(comics => this.comics = comics);
  }
  removeComics(){
    const id = +this.route.snapshot.paramMap.get('id');
    const categoryId = +this.route.snapshot.paramMap.get('category_id');
    this.service.removeComics(categoryId, id).subscribe(comics => this.comics = comics);
  }
}
