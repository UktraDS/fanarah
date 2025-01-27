import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  unsubscribe: Subject<any> = new Subject();
  data?: any;
  data1?: any;
  teachers?: any;
  constructor(
    @Inject(DOCUMENT) private documents: any,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    this.sharedService
      .getHomeheader()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (data) => {
          this.data = data.data[0];
        },
      });
  }
}
