import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSumComponent } from './change-sum.component';

describe('ChangeSumComponent', () => {
  let component: ChangeSumComponent;
  let fixture: ComponentFixture<ChangeSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
