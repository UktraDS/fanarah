import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentActivitesComponent } from './student-activites.component';

describe('StudentActivitesComponent', () => {
  let component: StudentActivitesComponent;
  let fixture: ComponentFixture<StudentActivitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentActivitesComponent]
    });
    fixture = TestBed.createComponent(StudentActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
