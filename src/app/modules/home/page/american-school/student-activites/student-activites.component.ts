import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-student-activites',
  templateUrl: './student-activites.component.html',
  styleUrls: ['./student-activites.component.scss'],
})
export class StudentActivitesComponent {
  ActivitiesData: any;
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.getActivityData().subscribe({
      next: (res) => {
        this.ActivitiesData = res;
      },
    });
  }
}
