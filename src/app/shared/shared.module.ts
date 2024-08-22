import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ScreenLoadarComponent } from './components/screen-loadar/screen-loadar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { CareerHeaderComponent } from './components/career-header/career-header.component';
import { CareerFormComponent } from './components/career-form/career-form.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [FooterComponent,HeaderComponent,ScreenLoadarComponent, SubHeaderComponent, CareerHeaderComponent, CareerFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CareerHeaderComponent,
    CareerFormComponent,
    ScreenLoadarComponent,
    SubHeaderComponent
  ],
})
export class SharedModule { }
