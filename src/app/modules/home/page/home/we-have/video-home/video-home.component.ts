import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  url: SafeResourceUrl = '';

  constructor(private sharedService: SharedService, private router: Router, private viewportScroller: ViewportScroller, private route: ActivatedRoute, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.sharedService.getEducatingChildren().pipe().subscribe({
      next: (data) => {
        this.video = data.data.video_link;
        this.url = this.getLinkIframe(this.video);
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
