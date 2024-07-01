import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {
  unsubscribe: Subject<any> = new Subject();
  dataLink?:any;
  data?:any;
  
  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService){
  }

  ngOnInit(): void {
    this.sharedService.getLinksSocialMedia().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.dataLink = data.data;        
      },
    });
    this.sharedService.getContactUs().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;
      },
    });
  }
}
