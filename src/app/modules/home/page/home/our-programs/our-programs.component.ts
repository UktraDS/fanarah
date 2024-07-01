import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-our-programs',
  templateUrl: './our-programs.component.html',
  styleUrls: ['./our-programs.component.scss']
})
export class OurProgramsComponent {
  unsubscribe: Subject<any> = new Subject();
  data?: any;
  programs?: any;

  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getAgePrograms().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;
        this.programs = this.data?.programs;
        // console.log(this.programs);  
      },
    });
  }
}
