import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayBudgetComponent } from './day-budget.component';

describe('DayBudgetComponent', () => {
  let component: DayBudgetComponent;
  let fixture: ComponentFixture<DayBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
