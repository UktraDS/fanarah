import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionOnlineComponent } from './admission-online.component';

describe('AdmissionOnlineComponent', () => {
  let component: AdmissionOnlineComponent;
  let fixture: ComponentFixture<AdmissionOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmissionOnlineComponent]
    });
    fixture = TestBed.createComponent(AdmissionOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
