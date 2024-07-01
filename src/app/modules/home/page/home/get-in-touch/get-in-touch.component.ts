import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent {
  formGroup: FormGroup = this.initForm();
  errorMess: string = '';
  hide : boolean = false;
  isloading : boolean = false;

  @ViewChild('menuContact') menu: ElementRef | undefined;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService,public translate : TranslateService, private sharedService: SharedService,private renderer: Renderer2) { }

  initForm(): FormGroup<any> {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, this.emailPatternValidator()]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      department: [this.translate.instant('different'), Validators.required],
      message: ['', [Validators.required]]
    });
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
  

  checkType(){
    if (this.formGroup.value.department != this.translate.instant('different')) {
     this.hide = false;
    }
   }
   submit() {
     if (!this.formGroup.invalid) {
       if (this.formGroup.value.department == this.translate.instant('different')) {
         this.hide = true;   
       } else {
         this.hide = false;
         this.isloading = true;
         this.sharedService.contactUs(this.formGroup.value).subscribe({
           next: (data: any) => {
             this.errorMess = '';
             this.hide = false;
             this.formGroup.reset();
             this.formGroup.get('department')?.patchValue(this.translate.instant('different'))
             this.toastrService.success(this.translate.instant('email_Sent'));
             this.isloading = false;
             this.toggleMenu();
           },
           error: (error: any) => {
             this.errorMess = 'Please Enter Fill Valid Data';
             this.toastrService.error(this.translate.instant('email_invalid'));
             this.isloading = false;
           }
         });
       }
     } else {
       this.formGroup.markAllAsTouched();
       this.errorMess = 'contact.errorMess';
     }
   }

  toggleMenu() {
    if (this.menu) {
      const modal = this.menu.nativeElement;
      const closeButton = modal.querySelector('.btn-close');
      if (closeButton) {
        (closeButton as HTMLElement).click();
      }
    }
  }
}

