import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeHaveComponent } from './we-have.component';

describe('WeHaveComponent', () => {
  let component: WeHaveComponent;
  let fixture: ComponentFixture<WeHaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeHaveComponent]
    });
    fixture = TestBed.createComponent(WeHaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
