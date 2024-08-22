import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent {
  unsubscribe: Subject<any> = new Subject();
  activeProductId?: any;
  data?:any;
  position?:any;
  cv?:any;
  constructor(private route: ActivatedRoute, private sharedService: SharedService){
    this.route.params.subscribe((params: any) => {
      this.activeProductId = params['id'];


    });
  }
  ngOnInit(): void {
    this.sharedService.getPositionheader().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.position = data.data;

        // console.log(this.data);
      },
    });
    this.sharedService.getCvheader().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.cv = data.data;

        // console.log(this.data);
      },
    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sharedService.getJobDetail(this.activeProductId).pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;

      },
    });
  }
}
