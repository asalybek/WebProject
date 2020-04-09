import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsCategoriesComponent } from './comics-categories.component';

describe('ComicsCategoriesComponent', () => {
  let component: ComicsCategoriesComponent;
  let fixture: ComponentFixture<ComicsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
