import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSchoolsComponent } from './details-schools.component';

describe('DetailsSchoolsComponent', () => {
  let component: DetailsSchoolsComponent;
  let fixture: ComponentFixture<DetailsSchoolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsSchoolsComponent]
    });
    fixture = TestBed.createComponent(DetailsSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
