import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerHeaderComponent } from './career-header.component';

describe('CareerHeaderComponent', () => {
  let component: CareerHeaderComponent;
  let fixture: ComponentFixture<CareerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerHeaderComponent]
    });
    fixture = TestBed.createComponent(CareerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
