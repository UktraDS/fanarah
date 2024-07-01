import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-our-program',
  templateUrl: './our-program.component.html',
  styleUrls: ['./our-program.component.scss']
})
export class OurProgramComponent {
  unsubscribe: Subject<any> = new Subject();
  data?: any;
  programs:any;

  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getPrograms().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data; 
        this.programs = this.data.programs;  
        // console.log(this.programs);  
      },
    });
  }
}
