import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ScreenLoadarComponent } from './components/screen-loadar/screen-loadar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';




@NgModule({
  declarations: [FooterComponent,HeaderComponent,ScreenLoadarComponent, SubHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ScreenLoadarComponent,
    SubHeaderComponent
  ],
})
export class SharedModule { }
