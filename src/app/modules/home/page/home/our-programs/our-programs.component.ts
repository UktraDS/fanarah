import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-our-programs',
  templateUrl: './our-programs.component.html',
  styleUrls: ['./our-programs.component.scss']
})
export class OurProgramsComponent {
  unsubscribe: Subject<any> = new Subject();
  data?: any;
  programs?: any;
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement> | undefined;
  slider?: KeenSliderInstance;
  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getAgePrograms().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;
        setTimeout(() => {
          this.initializeSlider(), 0
        });
        this.programs = this.data?.programs;
        // console.log(this.programs);
      },
    });
  }
  initializeSlider() {
    console.log('jjg');

    this.slider = new KeenSlider(this.sliderRef!.nativeElement, {
      slides: {
        perView: 3,

      },
      breakpoints: {
        '(max-width: 900px)': {
          slides: {
            perView: 3,
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

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }

  goToNextSlide() {
    this.slider?.next();
  }

  goToPrevSlide() {
    this.slider?.prev();
  }
}
