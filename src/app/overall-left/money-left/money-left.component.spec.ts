import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyLeftComponent } from './money-left.component';

describe('MoneyLeftComponent', () => {
  let component: MoneyLeftComponent;
  let fixture: ComponentFixture<MoneyLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
