import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent {
  unsubscribe: Subject<any> = new Subject();
  dataSchool?: any;

  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) { }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    this.sharedService.getSchoolCampus().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.dataSchool = data.data;
        // console.log(this.dataSchool);
      },
    });
  }
}
