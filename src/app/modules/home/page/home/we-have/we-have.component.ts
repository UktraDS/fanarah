import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-we-have',
  templateUrl: './we-have.component.html',
  styleUrls: ['./we-have.component.scss']
})
export class WeHaveComponent {
  unsubscribe: Subject<any> = new Subject();
  dataWehave?: any;
  features:any;

  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getEducatingChildren().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.dataWehave = data.data; 
        this.features = this.dataWehave.features;  
        // console.log(this.dataWehave);  
      },
    });
  }
}
