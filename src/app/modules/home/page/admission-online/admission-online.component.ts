import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-admission-online',
  templateUrl: './admission-online.component.html',
  styleUrls: ['./admission-online.component.scss']
})
export class AdmissionOnlineComponent {
  unsubscribe: Subject<any> = new Subject();
  data?: any;
  formGroup: FormGroup = this.initForm();
  errorMess: string = '';
  hideGender: boolean = false;
  hideSiblings: boolean = false;
  hideGradeApply: boolean = false;
  hideTransfersGrade: boolean = false;
  isloading: boolean = false;
  translatedKey: string = this.translate.instant('key');
  @ViewChild('modelApply') Model: ElementRef | undefined;
  today?: string;

  constructor(@Inject(DOCUMENT) private documents: any,private formBuilder: FormBuilder, private toastrService: ToastrService, private sharedService: SharedService, private renderer: Renderer2, public translate: TranslateService) { }

  ngOnInit(): void {
    this.sharedService.getContactUs().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;
      },
    });

    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    this.setToday();
  }

  setToday() {
    const date = new Date();
    const year = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    this.today = `${year}-${month}-${day}`;
  }

  initForm(): FormGroup<any> {
    return this.formBuilder.group({
      parent_first_name: ['', [Validators.required]],
      parent_last_name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      email: ['', [Validators.required, this.emailPatternValidator()]],

      student_first_name: ['', [Validators.required]],
      student_last_name: ['', [Validators.required]],

      birth_date: ['', [Validators.required]],
      gender: ['key', [Validators.required, this.notKeyValidator]],
      siblings: ['key', [Validators.required, this.notKeyValidator]],

      program_applying_for: ['key', [Validators.required, this.notKeyValidator]],
      grade_applying_for: ['key', [Validators.required, this.notKeyValidator]],
      transfers_grade: ['key', [Validators.required, this.notKeyValidator]],
      previous_school_name: ['', [Validators.required]]
    });
  }
grade:any = null
grades:any ={
  national:[
    "Pre-k",
"KG1",
"KG2",
"Pr1",
"Pr2",
"Pr3",
"Pr4",
"Pr5",
"Pr6",
"Prep1",
"Prep2",
"Prep3",
"Sec1",
"Sec2"],
FIPP:[
  "Prep1 FIPP",
  "Prep2 FIPP",
  "Prep3 FIPP",
],
American:[
  'G10',
  'G11',
]
}
changeGrades(e:any){
this.grade = this.grades[e.target.value]
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

  // checkType(): void {
  //   if (this.formGroup.value.gender !== '---') {
  //     this.hideGender = false;
  //   } else {
  //     this.hideGender = true;
  //   }

  //   if (this.formGroup.value.siblings !== '---') {
  //     this.hideSiblings = false;
  //   } else {
  //     this.hideSiblings = true;
  //   }

  //   if (this.formGroup.value.grade_applying_for !== '---') {
  //     this.hideGradeApply = false;
  //   } else {
  //     this.hideGradeApply = true;
  //   }

  //   if (this.formGroup.value.transfers_grade !== '---') {
  //     this.hideTransfersGrade = false;
  //   } else {
  //     this.hideTransfersGrade = true;
  //   }

  //   // تحقق مما إذا كان KG2 محددة في قائمة التسجيل
  //   if (this.formGroup.value.grade_applying_for !== '---' && this.formGroup.value.grade_applying_for !== 'KG2') {
  //     this.hideGradeApply = false;
  //   } else {
  //     this.hideGradeApply = true;
  //   }

  //   // استخدام الدالة getTransfersGradeOptions() للحصول على الخيارات المتاحة في قائمة الانتقالات
  //   const availableTransfersOptions = this.getTransfersGradeOptions(this.formGroup.value.grade_applying_for);

  //   // تحديث قائمة الانتقالات وتعطيل KG2 إذا تم اختيارها في قائمة التسجيل
  //   const transfersGradeSelect = document.getElementById('transfers_grade') as HTMLSelectElement;
  //   transfersGradeSelect.innerHTML = '';
  //   availableTransfersOptions.forEach(option => {
  //     const optionElement = document.createElement('option');
  //     optionElement.value = option;
  //     optionElement.textContent = option;
  //     transfersGradeSelect.appendChild(optionElement);
  //   });
  //   if (this.formGroup.value.grade_applying_for === 'Pre-k') {
  //     transfersGradeSelect.disabled = true;
  //   } else {
  //     transfersGradeSelect.disabled = false;
  //   }
  // }

  checkType(): void {
    this.hideGender = this.formGroup.value.gender === '---';

    this.hideSiblings = this.formGroup.value.siblings === '---';

    this.hideGradeApply = this.formGroup.value.grade_applying_for === '---';

    this.hideTransfersGrade = this.formGroup.value.transfers_grade === '---';

    // Update transfers_grade options based on grade_applying_for
    console.log(this.formGroup.value.grade_applying_for);

    const availableTransfersOptions = this.getTransfersGradeOptions(this.formGroup.value.grade_applying_for);
    const transfersGradeSelect = document.getElementById('transfers_grade') as HTMLSelectElement;
    if(this.formGroup.value.program_applying_for =='national'){

      transfersGradeSelect.innerHTML = '';
      availableTransfersOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        transfersGradeSelect.appendChild(optionElement);
      });
    }


    // Disable transfers_grade select for 'Pre-k'
    //transfersGradeSelect.disabled = this.formGroup.value.grade_applying_for === 'Pre-k';

    // Dispatch change event for transfers_grade select to trigger its update
    const event = new Event('change');
    transfersGradeSelect.dispatchEvent(event);
}


  getTransfersGradeOptions(selectedGrade: string): string[] {
    const options: string[] = ['Pre-k','KG1', 'KG2', 'Pr1', 'Pr2', 'Pr3', 'Pr4', 'Pr5', 'Pr6', 'Prep1', 'Prep2', 'Prep3', 'Sec1',"Sec2"];
    const index = options.indexOf(selectedGrade);
    if (index !== -1) {
      return options.slice(index + 1);
    }
    return [];
  }

  notKeyValidator(control: AbstractControl): { [key: string]: any } | null {
    if (control.value === 'key') {
      return { 'notKey': true };
    }
    return null;
  }

  submit() {
    if (!this.formGroup.invalid && !this.hideGender && !this.hideSiblings && !this.hideGradeApply && !this.hideTransfersGrade &&
      !(this.formGroup.value.grade_applying_for === 'KG2' && this.formGroup.value.transfers_grade === 'KG2')) {
      this.isloading = true;
      this.sharedService.OnlineAdmission(this.formGroup.value).subscribe({
        next: (data: any) => {
          this.errorMess = '';
          this.hideGender = false;
          this.hideSiblings = false;
          this.hideGradeApply = false;
          this.hideTransfersGrade = false;
          this.formGroup.reset();
          this.formGroup.get('gender')?.patchValue('key')
          this.formGroup.get('siblings')?.patchValue('key')
          this.formGroup.get('grade_applying_for')?.patchValue('key')
          this.formGroup.get('transfers_grade')?.patchValue('key')
          this.toastrService.success(this.translate.instant('apply_Sent'));
          this.isloading = false;


          setTimeout(() => {
            this.ShowModel();
            }, 100);

          setTimeout(() => {
            this.CloseModel();
          }, 2500);

        },
        error: (error: any) => {
          this.errorMess = 'Please Enter Fill Valid Data';
          this.toastrService.error(this.translate.instant('apply_invalid'));
          this.isloading = false;
        }
      });
    } else {
      this.formGroup.markAllAsTouched();
      this.errorMess = 'contact.errorMess';
    }
  }

  CloseModel() {
    if (this.Model) {
      const modal = this.Model.nativeElement;
      const closeButton = modal.querySelector('.btn-close');
      if (closeButton) {
        (closeButton as HTMLElement).click();
      }
    }
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
      modalElement.style.backgroundColor = 'none';
    }
  }

  ShowModel() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
      modalElement.style.backgroundColor = '#0000004d';
    }
  }

}
