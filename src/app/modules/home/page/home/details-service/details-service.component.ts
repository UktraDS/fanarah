import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

// interface CardItem {
//   id: number;
//   number: string;
//   title: string;
//   subtitle: string;
//   currentNumber: number;
// }
// const initialData = [
//   { number: "1855", title: "Student Totals",  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor semper tincidunt ut feugiat nulla. Nisl vivamus id donec eu aliquet sagittis tincidunt pellentesque." },
//   { number: "305", title: "Classes Totals",  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor semper tincidunt ut feugiat nulla. Nisl vivamus id donec eu aliquet sagittis tincidunt pellentesque." },
//   { number: "100", title: "Teacher Totals",  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor semper tincidunt ut feugiat nulla. Nisl vivamus id donec eu aliquet sagittis tincidunt pellentesque." }
// ];


@Component({
  selector: 'app-details-service',
  templateUrl: './details-service.component.html',
  styleUrls: ['./details-service.component.scss']
})
export class DetailsServiceComponent implements OnInit{
  @ViewChild('targetSection') targetSection?: ElementRef;
  unsubscribe: Subject<any> = new Subject();
  data?: any;
  animationExecuted: boolean = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getStatistics().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;
        // this.startCountAnimation();

      },
    });

    window.addEventListener('scroll', this.scrollHandler.bind(this));

  }

  ngOnDestroy(): void {
    this.unsubscribe.next(undefined);
    this.unsubscribe.complete();
    window.removeEventListener('scroll', this.scrollHandler.bind(this));
  }

  scrollHandler(): void {
    if (!this.animationExecuted && this.isElementInViewport(this.targetSection?.nativeElement)) {
      if (!this.animationExecuted) {
        this.startCountAnimation();
        this.animationExecuted = true;
      }
      // this.animationExecuted = true;
    }
  }

  isElementInViewport(el: HTMLElement | null): boolean {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  startCountAnimation(): void {
    if (!this.data) return;
    for (let index = 0; index < this.data.length; index++) {
      const targetCount = parseInt(this.data[index].count);
      const intervalTime = 10;
      const increment = Math.ceil(targetCount / (4000 / intervalTime));
      let currentCount = 1;
      const interval = setInterval(() => {
        if (currentCount < targetCount) {
          currentCount += increment;
          if (currentCount > targetCount) {
            currentCount = targetCount;
          }
          this.data[index].count = currentCount.toString();
        } else {
          clearInterval(interval);
        }
      }, intervalTime);
    }
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   this.onScroll();
  // }

  // onScroll(): void {
  //   const sectionOffset = this.targetSection?.nativeElement.offsetTop;
  //   const windowHeight = window.innerHeight;
  
  //   console.log("Section Offset:", sectionOffset);
  //   console.log("Window Height:", windowHeight);
  //   console.log("Data:", this.data);
  
  //   if (window.pageYOffset > sectionOffset - windowHeight) {
  //     if (this.data) {
  //         this.startCountAnimation();
  //     }
  //   }
  // }










  // dataCards: CardItem[] = [];

  // @ViewChild('targetSection') targetSection?: ElementRef;

  // processData(data: { number: string; title: string; subtitle: string; }[]): void {
  //   this.dataCards = data.map((item, index) => ({ ...item, id: index + 1, currentNumber: 0, name: "default name" }));
  // }

  // ngOnInit(): void {
  //   this.processData(initialData);
  //   this.startCounters();
  // }

  // startCounters(): void {
  //   this.dataCards.forEach((card) => {
  //     const maxNumber = +card.number;
  //     this.startCounter(card, maxNumber);
  //   });
  // }

  // startCounter(card: CardItem, maxNumber: number): void {
  //   const intervalId = setInterval(() => {
  //     const sectionOffset = this.targetSection?.nativeElement.offsetTop;
  //     const windowHeight = window.innerHeight;

  //     if (window.pageYOffset > (sectionOffset || 0) - windowHeight) {
  //       if (card.currentNumber >= maxNumber) {
  //         clearInterval(intervalId);
  //       } else {
  //         card.currentNumber += 1;
  //         card.currentNumber = parseFloat(card.currentNumber.toFixed(1));
  //       }
  //     }
  //   }, 300);
  // }

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   this.onScroll();
  // }

  // onScroll(): void {
  //   const sectionOffset = this.targetSection?.nativeElement.offsetTop;
  //   const windowHeight = window.innerHeight;

  //   if (window.pageYOffset > sectionOffset - windowHeight) {
  //     this.startCounters();
  //   }
  // }
}
