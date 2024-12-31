import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent {
  teachersData: any;
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.getTeachersData().subscribe({
      next: (res) => {
        this.teachersData = res;
      },
    });
  }
}
