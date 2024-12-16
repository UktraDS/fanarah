import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanSchoolComponent } from './american-school.component';

describe('AmericanSchoolComponent', () => {
  let component: AmericanSchoolComponent;
  let fixture: ComponentFixture<AmericanSchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmericanSchoolComponent]
    });
    fixture = TestBed.createComponent(AmericanSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
