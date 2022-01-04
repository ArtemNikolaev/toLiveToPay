import { TestBed } from '@angular/core/testing';

import { DayBudgetService } from './day-budget.service';

describe('DayBudgetService', () => {
  let service: DayBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
