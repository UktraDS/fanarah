import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-events-gallery',
  templateUrl: './events-gallery.component.html',
  styleUrls: ['./events-gallery.component.scss']
})
export class EventsGalleryComponent implements OnInit {
  activeModel: any;
  unsubscribe: Subject<any> = new Subject();
  dataEvent?: any;
  url: any[] = [];
  ssss:string='<iframe width="560" height="315" src="https://www.youtube.com/embed/CepQwlo_WU0?si=2sR60se0P0FSe8h7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService, private sanitizer: DomSanitizer) { }

  getLinkIframe(link: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    this.sharedService.getEventGallery().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.dataEvent = data.data;
        this.activeModel = this.dataEvent.categories[0];


        this.activeModel.activities.forEach((activity: any) => {
          if (activity.media_type === 'video' && activity.iframe_video) {
            this.url.push(this.getLinkIframe(activity.iframe_video));
          }
        });
      },
    });
  }

  // Change active Model 
  changeActiveModel(id: any) {
    this.activeModel = this.dataEvent.categories.filter((model: any) => model.id == id)[0];

    this.url = [];
    this.activeModel.activities.forEach((activity: any) => {
      if (activity.media_type === 'video' && activity.iframe_video) {
        this.url.push(this.getLinkIframe(activity.iframe_video));
      }
    });
    // console.log(this.url);
    // console.log(this.activeModel);
  }
}
