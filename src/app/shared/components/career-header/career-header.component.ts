import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  
  selector: 'app-career-header',
  templateUrl: './career-header.component.html',
  styleUrls: ['./career-header.component.scss']
})
export class CareerHeaderComponent {
  unsubscribe: Subject<any> = new Subject();
  data?: any;


  constructor( private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getCareerheader().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;

        // console.log(this.data);
      },
    });
  }

}
