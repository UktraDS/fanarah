import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  unsubscribe: Subject<any> = new Subject();
  data?: any;
  cv?: any;
  position?: any;


  constructor( private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getCvheader().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.cv = data.data;

        // console.log(this.data);
      },
    });
    this.sharedService.getPositionheader().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.position = data.data;

        // console.log(this.data);
      },
    });
    this.sharedService.getCareerlist().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;

        // console.log(this.data);
      },
    });
  }
}
