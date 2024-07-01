import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHousesComponent } from './our-houses.component';

describe('OurHousesComponent', () => {
  let component: OurHousesComponent;
  let fixture: ComponentFixture<OurHousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurHousesComponent]
    });
    fixture = TestBed.createComponent(OurHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
