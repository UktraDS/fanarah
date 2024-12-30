import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-about-school',
  templateUrl: './about-school.component.html',
  styleUrls: ['./about-school.component.scss'],
})
export class AboutSchoolComponent {
  data: any;
  constructor(private sharedService: SharedService) {
    // this.sharedService.getAboutSchoolData().subscribe({
    //   next: (res) => {
    //     this.data = res;
    //     console.log(res);
    //   },
    // });
  }

  ngOnInit() {
    this.sharedService.getAboutSchoolData().subscribe({
      next: (res) => {
        this.data = res;
        console.log(res);
      },
    });
  }
}
