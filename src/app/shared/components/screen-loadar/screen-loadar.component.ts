import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-screen-loadar',
  templateUrl: './screen-loadar.component.html',
  styleUrls: ['./screen-loadar.component.scss']
})
export class ScreenLoadarComponent {
  // constructor(public sharedService:SharedService){    
  // }

  showLoader: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
        setTimeout(() => {
          this.showLoader = false;
        }, 1000);
      }
    });
  }
}
