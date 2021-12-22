import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMoneyComponent } from './save-money.component';

describe('SaveMoneyComponent', () => {
  let component: SaveMoneyComponent;
  let fixture: ComponentFixture<SaveMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
