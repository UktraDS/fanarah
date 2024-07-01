import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDiscoverComponent } from './hero-discover.component';

describe('HeroDiscoverComponent', () => {
  let component: HeroDiscoverComponent;
  let fixture: ComponentFixture<HeroDiscoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDiscoverComponent]
    });
    fixture = TestBed.createComponent(HeroDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
