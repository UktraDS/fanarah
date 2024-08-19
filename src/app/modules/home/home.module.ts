import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home/home.component';
import { ContactusComponent } from './page/contactus/contactus.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SchoolsComponent } from './page/schools/schools.component';
import { EventsGalleryComponent } from './page/events-gallery/events-gallery.component';
import { ThreeCardComponent } from './page/home/three-card/three-card.component';
import { WeHaveComponent } from './page/home/we-have/we-have.component';
import { VideoHomeComponent } from './page/home/we-have/video-home/video-home.component';
import { OurProgramComponent } from './page/home/our-program/our-program.component';
import { DetailsServiceComponent } from './page/home/details-service/details-service.component';
import { AboutUsComponent } from './page/home/about-us/about-us.component';
import { YoungGenerationComponent } from './page/home/young-generation/young-generation.component';
import { HeroDiscoverComponent } from './page/home/hero-discover/hero-discover.component';
import { OurHousesComponent } from './page/home/our-houses/our-houses.component';
import { OurProgramsComponent } from './page/home/our-programs/our-programs.component';
import { HappyClientsComponent } from './page/home/happy-clients/happy-clients.component';
import { GalleryEventsComponent } from './page/home/gallery-events/gallery-events.component';
import { GetInTouchComponent } from './page/home/get-in-touch/get-in-touch.component';
import { DetailsSchoolsComponent } from './page/details-schools/details-schools.component';
import { SliderSchoolComponent } from './page/details-schools/slider-school/slider-school.component';
import { AdmissionOnlineComponent } from './page/admission-online/admission-online.component';
import { CareersComponent } from './page/careers/careers.component';
import { JobApplicationComponent } from './page/job-application/job-application.component';


@NgModule({
  declarations: [HomeComponent,
    ContactusComponent,

    AboutusComponent,
     SchoolsComponent,
      EventsGalleryComponent,
       ThreeCardComponent,
       WeHaveComponent,
       VideoHomeComponent,
        OurProgramComponent,
        DetailsServiceComponent,

        AboutUsComponent,
        YoungGenerationComponent,
         HeroDiscoverComponent,
         OurHousesComponent,
         OurProgramsComponent,
         HappyClientsComponent,
          GalleryEventsComponent, GetInTouchComponent, DetailsSchoolsComponent, SliderSchoolComponent, AdmissionOnlineComponent, CareersComponent, JobApplicationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
