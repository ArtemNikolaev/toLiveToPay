import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallLeftComponent } from './overall-left.component';

describe('OverallLeftComponent', () => {
  let component: OverallLeftComponent;
  let fixture: ComponentFixture<OverallLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
