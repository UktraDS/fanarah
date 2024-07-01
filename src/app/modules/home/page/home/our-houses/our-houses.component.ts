import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-our-houses',
  templateUrl: './our-houses.component.html',
  styleUrls: ['./our-houses.component.scss']
})
export class OurHousesComponent {
  unsubscribe: Subject<any> = new Subject();
  data?: any;
  houses?: any;

  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getHouses().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;
        this.houses = this.data?.houses;
        // console.log(this.data);  
      },
    });
  }
}
