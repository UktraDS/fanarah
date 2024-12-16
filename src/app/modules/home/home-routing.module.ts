import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactusComponent } from './page/contactus/contactus.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { SchoolsComponent } from './page/schools/schools.component';
import { EventsGalleryComponent } from './page/events-gallery/events-gallery.component';
import { DetailsSchoolsComponent } from './page/details-schools/details-schools.component';
import { AdmissionOnlineComponent } from './page/admission-online/admission-online.component';
import { CareersComponent } from './page/careers/careers.component';
import { JobApplicationComponent } from './page/job-application/job-application.component';
import { AmericanSchoolComponent } from './page/american-school/american-school.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'national-school', component: SchoolsComponent },
  { path: 'national-school-details/:id', component: DetailsSchoolsComponent },
  { path: 'american-school', component: AmericanSchoolComponent },
  { path: 'Events-Gallery', component: EventsGalleryComponent },
  { path: 'About-us', component: AboutusComponent },
  { path: 'Contact-us', component: ContactusComponent },
  { path: 'online-Admission', component: AdmissionOnlineComponent },
  { path: 'career', component: CareersComponent },
  { path: 'career/job/:id', component: JobApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
