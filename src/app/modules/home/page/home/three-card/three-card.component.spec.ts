import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCardComponent } from './three-card.component';

describe('ThreeCardComponent', () => {
  let component: ThreeCardComponent;
  let fixture: ComponentFixture<ThreeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeCardComponent]
    });
    fixture = TestBed.createComponent(ThreeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
