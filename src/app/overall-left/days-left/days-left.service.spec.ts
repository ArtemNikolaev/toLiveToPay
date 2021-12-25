import { TestBed } from '@angular/core/testing';

import { DaysLeftService } from './days-left.service';

describe('DaysLeftService', () => {
  let service: DaysLeftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaysLeftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
