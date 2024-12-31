import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  headerData: any;
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.getHeaderData().subscribe({
      next: (res) => {
        this.headerData = res;
      },
    });
  }
}
