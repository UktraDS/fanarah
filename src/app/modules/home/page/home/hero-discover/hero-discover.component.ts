import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-hero-discover',
  templateUrl: './hero-discover.component.html',
  styleUrls: ['./hero-discover.component.scss']
})
export class HeroDiscoverComponent {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;
  slider?: KeenSliderInstance;
  // slider: any = null

  // @Input() teachers: any;
  
  unsubscribe: Subject<any> = new Subject();
  data?: any;
  teachers?: any;

  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getTeachers().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;
        this.teachers = this.data.teachers;
        setTimeout(() => {
          this.initializeSlider(), 0
        });
      }
    });
  }

  initializeSlider() {
    if (this.sliderRef) {
    this.slider = new KeenSlider(this.sliderRef!.nativeElement, {
      slides: {
        perView: 4,
        spacing: 15,
      },
      breakpoints: {
        '(max-width: 900px)': {
          slides: {
            perView: 4,
            spacing: 15,
          },
        },
        '(max-width: 500px)': {
          slides: {
            perView: 1,
            spacing: 15,
          },
        },
      },
    });

    this.sliderRef?.nativeElement.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      const index = target.closest('.keen-slider__slide') ?
        Array.from(this.sliderRef!.nativeElement.children).indexOf(target.closest('.keen-slider__slide') as Element) :
        -1;

      if (index !== -1) {
        this.slider?.next();
        this.slider?.prev();
      }
    });
  }
  }

  ngOnDestroy() {
    // if (this.slider) this.slider?.destroy();
    if (this.slider) this.slider.destroy();
  }

  goToNextSlide() {
    // if (this.slider) {
    this.slider?.next();
    // }
  }

  goToPrevSlide() {
    // if (this.slider) {
    this.slider?.prev();
    // }
  }
}
