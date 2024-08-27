import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { max } from 'rxjs';
@Component({
  selector: 'app-career-form',
  templateUrl: './career-form.component.html',
  styleUrls: ['./career-form.component.scss']
})
export class CareerFormComponent {
  phone:string=''
  errors:any
  fileError:any=false
  flags:any;
  success:any;
  isloading:boolean = false;
  formGroup: FormGroup = this.initForm();
  @Input() data:any
  @Input() id :any
code:any='+02';
  formData:FormData = new FormData();
  flag:string = '<img _ngcontent-ng-c3507530327="" src="assets/image/career/egy.png" alt="">'
  selected:boolean = false
  constructor(private sharedService:SharedService,private formBuilder: FormBuilder,private translateService:TranslateService,private toastrService:ToastrService){}
  ngOnInit(): void {
    polyfillCountryFlagEmojis();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class
    if(this.id){
      this.formGroup.patchValue({career_id:this.id})
    }
    this.sharedService.getFlags().subscribe({
      next: (flags:any) =>{
        this.flags= flags;
        this.flag = flags[0].flag

        this.formGroup.patchValue( {'code':flags[0].dial_code});
      }
    })
  }
  initForm(): FormGroup<any> {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{5,15}')]],
      email: ['', [Validators.required,this.emailPatternValidator()]],
    career_id: [''],
    })
  }
  emailPatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
      const isValid = emailPattern.test(control.value);
      return isValid ? null : { 'emailPattern': { value: control.value } };
    };
  }
  //formGroup:FormGroup = new FormGroup
  upload(){
    document.getElementById('file')?.click()
  }

  changeFile(e:any){
    this.formData.set('file',e.target.files[0])
this.selected = true
  }
  child(e:any){

  e.target?.classList.remove('active')
  }
changeFlag(e:any){
  e.currentTarget?.classList.add('active')
  document.querySelector('.active')?.classList.remove('active')



  this.flag = e.currentTarget.getAttribute('flag');
  this.formGroup.patchValue( {'code':e.currentTarget.getAttribute('value')});



}
convertFormGroupToFormData() {
  Object.keys(this.formGroup.controls).forEach((key) => {
    const control = this.formGroup.get(key);


    if (control?.value != null) {
        this.formData.set(key, control?.value);

      } else {
        this.formData.set(key, '');
      }

  });
}
submit(e:any) {
  e.preventDefault();
  this.success =''
  if ( !this.isloading && !this.formGroup.invalid) {
this.convertFormGroupToFormData();
this.isloading = true;
this.sharedService.cvSend(this.formData).subscribe({
  next:(msg)=>{
    this.toastrService.success(this.translateService.instant('apply_Sent'));
    this.success=(this.translateService.instant('apply_Sent'));
this.fileError =false
    this.isloading = false;

    this.formGroup.reset();
    this.formData.delete('file')
    this.selected =false;
  }
  ,
  error:(err:any)=>{

    this.isloading = false;
    if( Object.keys(err.error.errors).includes('file')){
      this.fileError = true
    }
    //this.errors = Object.values(err.error.errors)

  }
})
  }else{
    this.formGroup.markAllAsTouched()
  }
}
}
