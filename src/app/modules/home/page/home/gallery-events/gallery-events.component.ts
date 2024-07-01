import { DOCUMENT } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
// import Swiper from 'swiper';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-gallery-events',
  templateUrl: './gallery-events.component.html',
  styleUrls: ['./gallery-events.component.scss']
})
export class GalleryEventsComponent {
  // private mySwiper!: Swiper;

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  slider: KeenSliderInstance | null = null;


  unsubscribe: Subject<any> = new Subject();
  data?: any;
  dataimage: any;

  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getGalleryEvents().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;
        this.dataimage = this.data?.images;
        // console.log(this.data); 
        setTimeout(() => {
          this.initializeSlider(), 0
        }); 
      },
    });
  }
  
  initializeSlider() {
    // let mySwiper = new Swiper(".swiper-container", {
    //   direction: 'horizontal',
    //   loop: true,
    //   speed: 2000,
    //   parallax: true,
    //   spaceBetween: 15,
    //   centeredSlides: true,
    //   freeMode: true,
    //   grabCursor: true,

    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   autoplay: {
    //     delay: 200,
    //     disableOnInteraction: false,
    //   },

    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   breakpoints: {
    //     500: {
    //       slidesPerView: 1
    //     },
    //     700: {
    //       slidesPerView: 2
    //     },
    //     900: {
    //       slidesPerView: 2.5
    //     },
    //     1100: {
    //       slidesPerView: 3.5
    //     },


    //   },
    // });


    // // Add click event listeners for the dots
    // const dots = document.querySelectorAll('.dot_active');
    // dots.forEach((dot, index) => {
    //   dot.addEventListener('click', () => {
    //     mySwiper.slideTo(index); 
    //   });
    // });

    // document.querySelector('.swiper-button-next')?.addEventListener('click', () => {
    //   mySwiper.slideNext();
    // });

    // document.querySelector('.swiper-button-prev')?.addEventListener('click', () => {
    //   mySwiper.slidePrev();
    // });



    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slides: {
        perView: 3.5,
        spacing: 15,
      },
      breakpoints: {
        '(max-width: 1201px)': {
          slides: {
            perView: 3.5,
            spacing: 15,
          },
        },
        '(max-width: 1200px)': {
          slides: {
            perView: 2.5,
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
    })
  }



  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
