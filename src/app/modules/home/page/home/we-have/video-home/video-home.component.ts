import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.scss']
})
export class VideoHomeComponent {
  @Input() dataWehave: any;
  video?: any;
  prefix: string ='';
  url: SafeResourceUrl = '';
links: any ={
  'fb.watch':'https://www.facebook.com/plugins/video.php?href=',
  'www.fb.watch':'https://www.facebook.com/plugins/video.php?href=',
  'facebook.com':'https://www.facebook.com/plugins/video.php?href=',
  'www.facebook.com':'https://www.facebook.com/plugins/video.php?href=',
}
  constructor(private sharedService: SharedService,private el: ElementRef, private router: Router, private viewportScroller: ViewportScroller, private route: ActivatedRoute, private sanitizer: DomSanitizer) {

  }
  responsiveWidth(){

console.log('tghtg');

      let img2=   this.el.nativeElement.querySelector('iframe')
      console.log(img2);

      let cat = document.querySelector('#facebook')
console.log(cat);

      img2.style.height   = (cat)+"px"


  }
  ngOnInit(): void {
    this.sharedService.getEducatingChildren().pipe().subscribe({
      next: (data) => {
        this.video = data.data.video_link;
        let url = new URL(this.video);
        this.prefix =this.links[url.hostname]??'';
        this.url = this.getLinkIframe(this.prefix+this.video);

      },
    });
  }

  getLinkIframe(link: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  showVideo: boolean = true;

  showSectionsVideo() {
    this.showVideo = false;
  }

  hideSectionsVideo() {
    this.showVideo = true;
  }
}
