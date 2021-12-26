import { TestBed } from '@angular/core/testing';

import { MoneyLeftService } from './money-left.service';

describe('MoneyLeftService', () => {
  let service: MoneyLeftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyLeftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
