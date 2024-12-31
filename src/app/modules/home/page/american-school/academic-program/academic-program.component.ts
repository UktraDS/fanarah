import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-academic-program',
  templateUrl: './academic-program.component.html',
  styleUrls: ['./academic-program.component.scss'],
})
export class AcademicProgramComponent {
  programHeadingData: any;
  programData: any;
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.getProgramHeadingData().subscribe({
      next: (res) => {
        this.programHeadingData = res;
      },
    });

    this.sharedService.getProgramData().subscribe({
      next: (res) => {
        this.programData = res;
      },
    });
  }
}
