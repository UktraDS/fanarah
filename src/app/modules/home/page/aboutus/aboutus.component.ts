import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
  unsubscribe: Subject<any> = new Subject();
  dataWhoWe?: any;
  dataOurService?: any;

  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.sharedService.getWhoWeAre().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.dataWhoWe = data.data;
        // console.log(this.dataWhoWe);  
      },
    });
    this.sharedService.getOurService().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.dataOurService = data.data;
        // console.log(this.dataOurService);  
      },
    });


    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
