import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

interface SchoolItem {
  id: number;
  image: string;
  main_heading: string;
  updated_at: string;
}

@Component({
  selector: 'app-slider-school',
  templateUrl: './slider-school.component.html',
  styleUrls: ['./slider-school.component.scss']
})
export class SliderSchoolComponent {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  slider?: KeenSliderInstance = undefined
  activeSchoolsId: any;

  // itemsData: SchoolItem[] = [

  //   {
  //     id: 1,
  //     image: "assets/image/schools/img1.jpg",
  //     main_heading: "PRE -SCHOOL PREMISES", updated_at: "2024-02-01T12:29:47.000000Z"
  //   },

  //   {
  //     id: 2,
  //     image: "assets/image/schools/img2.jpg",
  //     main_heading: "Kindergarten Department", updated_at: "2024-05-01T12:29:47.000000Z"
  //   },


  //   {
  //     id: 3,
  //     image: "assets/image/schools/img3.jpg",
  //     main_heading: "Primary Department", updated_at: "2024-06-01T12:29:47.000000Z"
  //   },


  //   {
  //     id: 4,
  //     image: "assets/image/schools/img4.jpg",
  //     main_heading: "Preparatory And Secondary Department", updated_at: "2024-09-01T12:29:47.000000Z"
  //   }

  // ]
  unsubscribe: Subject<any> = new Subject();
  dataSchool?: any;

  // filteredItems: SchoolItem[] = [];

  constructor(private router: Router, private viewportScroller: ViewportScroller, private route: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: any) => {
      this.activeSchoolsId = params['id'];
    });

    this.sharedService.getSchoolCampus().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.dataSchool = data.data;
        this.dataSchool = this.dataSchool.news.filter((item:any) => item.id != this.activeSchoolsId);
        setTimeout(() => {
          this.initializeSlider(), 0
        });
        // console.log(this.dataSchool);
      },
    });
    

    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  changeRouterLinkOrNavigateToSection(target: string | number) {
    if (typeof target === 'number') {
      this.router.navigateByUrl(`/Schools-Details/${target}`).then(() => {
        this.viewportScroller.scrollToPosition([0, 0]); // Scroll to top of the page
      });
    } else if (typeof target === 'string') {
      this.router.navigate(['/']).then(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }


  initializeSlider() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      rtl: true,
      slides: {
        perView: 3,
        spacing: 10,
      },
      breakpoints: {
        '(min-width: 1251px)': {
          slides: {
            perView: 3,
            spacing: 10,
          },
        },
        '(max-width: 1250px)': {
          slides: {
            perView: 3,
            spacing: 10,
          },
        },
        '(max-width: 500px)': {
          slides: {
            perView: 1,
            spacing: 10,
          },
        },
      }
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
    if (this.slider) this.slider.destroy()
  }
  goToNextSlide() {
    this.slider?.next();
  }

  goToPrevSlide() {
    this.slider?.prev();
  }
}
