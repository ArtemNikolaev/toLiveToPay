import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySpendsComponent } from './today-spends.component';

describe('TodaySpendsComponent', () => {
  let component: TodaySpendsComponent;
  let fixture: ComponentFixture<TodaySpendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaySpendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaySpendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
