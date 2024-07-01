import { Component, ElementRef, HostListener, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  lang: string = sessionStorage.getItem('lang') || 'en';
  unsubscribe: Subject<any> = new Subject();
  dataLink?:any;

  constructor(private translate: TranslateService, public router: Router,@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) {
    this.switchPagesDirection(this.lang);
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


  switchLanguage(lang: string) {
    sessionStorage.setItem('lang', lang);
    this.translate.use(lang);
    this.switchPagesDirection(lang);
    window.location.reload();
  }
  switchPagesDirection(lang: any) {
    if (lang == 'en') {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    }
    else if (lang == 'ar') {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    }
  }


  windowScrolled: boolean = false;

  
  @HostListener("window:scroll", [])
  onWindowScroll() {

      if (window.pageYOffset || window.document.documentElement.scrollTop || window.document.body.scrollTop > 100) {
          this.windowScrolled = true;
      }
     else if (this.windowScrolled && window.pageYOffset || window.document.documentElement.scrollTop || window.document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  

  scrollToTop(){
    window.scroll({
      top: 0,
      behavior: 'smooth'
    }) 
  }
}
