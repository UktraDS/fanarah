import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  unsubscribe: Subject<any> = new Subject();
  dataLink?:any;
  

  constructor(private elRef: ElementRef, public router: Router,@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.sharedService.getLinksSocialMedia().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.dataLink = data.data;        
      },
    });
  }

  scrollToElement(elementId: string): void {
    const currentPath = window.location.pathname;

    if (currentPath === '/home') {
      this.scoll(elementId);
    } else {
      this.router.navigateByUrl('/home');
      
      setTimeout(() => {
        this.scoll(elementId);
      },200);
    }
  }
  scoll(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
