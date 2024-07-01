import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-happy-clients',
  templateUrl: './happy-clients.component.html',
  styleUrls: ['./happy-clients.component.scss']
})
export class HappyClientsComponent {
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement> | undefined;
  slider?: KeenSliderInstance;

  selectOption: any = [
    { id: 1, color: '#4A78DD'},
    { id: 2, color: '#FF6F96 '},
    { id: 3, color: '#2294AC'},
  ];

  unsubscribe: Subject<any> = new Subject();
  data?: any;
  comments?: any;

  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getComments().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;
        this.comments = this.data?.comments;
        setTimeout(() => {
          this.initializeSlider(), 0
        });
        // console.log(this.data);  
      },
    });
  }

  initializeSlider() {
    this.slider = new KeenSlider(this.sliderRef!.nativeElement, {
      slides: {
        perView: 3,
        spacing: 15,
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
