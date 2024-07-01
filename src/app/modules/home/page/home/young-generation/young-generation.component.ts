import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-young-generation',
  templateUrl: './young-generation.component.html',
  styleUrls: ['./young-generation.component.scss']
})
export class YoungGenerationComponent {
  unsubscribe: Subject<any> = new Subject();
  data?: any;

  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getGuideAbout2().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data; 
        // console.log(this.data);  
      },
    });
  }
}
