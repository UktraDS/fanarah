import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungGenerationComponent } from './young-generation.component';

describe('YoungGenerationComponent', () => {
  let component: YoungGenerationComponent;
  let fixture: ComponentFixture<YoungGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoungGenerationComponent]
    });
    fixture = TestBed.createComponent(YoungGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
