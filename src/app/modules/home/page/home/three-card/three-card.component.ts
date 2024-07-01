import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-three-card',
  templateUrl: './three-card.component.html',
  styleUrls: ['./three-card.component.scss']
})
export class ThreeCardComponent {
  unsubscribe: Subject<any> = new Subject();
  data?: any;

  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getFeatureInfomation().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;   
        // console.log(this.data);  
      },
    });
  }
}
