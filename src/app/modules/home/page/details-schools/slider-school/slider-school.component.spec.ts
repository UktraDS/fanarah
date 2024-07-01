import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSchoolComponent } from './slider-school.component';

describe('SliderSchoolComponent', () => {
  let component: SliderSchoolComponent;
  let fixture: ComponentFixture<SliderSchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderSchoolComponent]
    });
    fixture = TestBed.createComponent(SliderSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
