import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysLeftComponent } from './days-left.component';

describe('DaysLeftComponent', () => {
  let component: DaysLeftComponent;
  let fixture: ComponentFixture<DaysLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
