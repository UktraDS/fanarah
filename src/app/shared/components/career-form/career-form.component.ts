import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-career-form',
  templateUrl: './career-form.component.html',
  styleUrls: ['./career-form.component.scss']
})
export class CareerFormComponent {
  phone:string=''
  flag:string = '<img _ngcontent-ng-c3507530327="" src="assets/image/career/egy.png" alt="">'
  selected:boolean = false
  //formGroup:FormGroup = new FormGroup
  upload(){
    document.getElementById('file')?.click()
  }
  changeFile(){
this.selected = true
  }
changeFlag(e:any){
  document.querySelector('.active')?.classList.remove('active')
  e.target?.classList.add('active')
  console.log(e.target.innerHTML);

this.flag = e.target.innerHTML;


}
}
