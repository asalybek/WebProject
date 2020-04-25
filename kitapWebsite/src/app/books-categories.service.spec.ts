import { TestBed } from '@angular/core/testing';

import { BooksCategoriesService } from './services/books-categories.service';

describe('BooksCategoriesService', () => {
  let service: BooksCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
