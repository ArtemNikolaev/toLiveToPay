import { TestBed } from '@angular/core/testing';

import { SpendsStorageService } from './spends-storage.service';

describe('SpendsStorageService', () => {
  let service: SpendsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpendsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
