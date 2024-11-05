import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
  unsubscribe: Subject<any> = new Subject();
  dataWhoWe?: any;
  dataOurService?: any;
  firstTimeOut:any = null
  secondTimeOut:any = null
scrolled :number = 1 
height :number = 0 
  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.sharedService.getWhoWeAre().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.dataWhoWe = data.data;
        // console.log(this.dataWhoWe);
      },
    });
    this.sharedService.getOurService().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.dataOurService = data.data;
        // console.log(this.dataOurService);
      },
    });


    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
  onTextMouseEnter2(e:any){
    this.scrolled++;
    let text = e.target.querySelector('.text')
   console.log( text.scrollTop );
  if(text.scrollTop < text.scrollHeight- text.clientHeight){
  console.log("1");

  e.target.querySelector('.text').scrollBy(0,1)
  this.secondTimeOut= setTimeout(()=>this.onTextMouseEnter2(e),40)
}

  }
  onTextMouseEnter(e:any){
    this.height = e.target.clientHeight;
    this.scrolled =0
    e.target.querySelector('.text').scrollTo(0,0)
this.firstTimeOut = setTimeout(() => {
  this.onTextMouseEnter2(e)
}, 700);
  }
  onTextMouseLeave(e:any){
    clearTimeout(this.secondTimeOut)
    clearTimeout(this.firstTimeOut)
    console.log(   e.target.querySelector('.text'));

    

  }
}
