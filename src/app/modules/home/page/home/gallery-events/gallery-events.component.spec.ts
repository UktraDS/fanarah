import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryEventsComponent } from './gallery-events.component';

describe('GalleryEventsComponent', () => {
  let component: GalleryEventsComponent;
  let fixture: ComponentFixture<GalleryEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryEventsComponent]
    });
    fixture = TestBed.createComponent(GalleryEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
