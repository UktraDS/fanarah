import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-academic-program',
  templateUrl: './academic-program.component.html',
  styleUrls: ['./academic-program.component.scss'],
})
export class AcademicProgramComponent {
  constructor(private sharedService: SharedService) {}
}
