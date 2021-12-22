import { TestBed } from '@angular/core/testing';

import { CategoriesStorageService } from './categories-storage.service';

describe('CategoriesStorageService', () => {
  let service: CategoriesStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
