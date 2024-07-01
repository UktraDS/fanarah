import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  unsubscribe: Subject<any> = new Subject();
  data?: any;
  features:any;

  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getaboutus().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data; 
        this.features = this.data.features;
        // console.log(this.data);  
      },
    });
  }
}
