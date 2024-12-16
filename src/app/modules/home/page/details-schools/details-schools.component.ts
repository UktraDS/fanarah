import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-details-schools',
  templateUrl: './details-schools.component.html',
  styleUrls: ['./details-schools.component.scss']
})
export class DetailsSchoolsComponent {

  activeProductId: any;
  // filteredItems: any[] = [];

  // itemsData = [

  //   {
  //     id: 1,
  //     image: "assets/image/schools/details.jpg",
  //     main_heading: "PRE -SCHOOL PREMISES",
  //     main_description: "The pre- school campus is designed and built according to the highest international standards with a land area of 1050 square meters. It comprises of 4 classes. The classrooms are designed to receive 14 student Complete sound system for all the pre- school building. Classrooms environment is safe, colorful, nurturing and engaging. All classrooms are equipped with air conditioners ,have networked computers with internet access and interactive smart board. Huge area 45 meters square for each , giving each student his needed free movement",
  //     heading2: "PLAYGROUNDS AND ACTIVITY ROOMS",
  //     description2: "Physical education is a major area of extra-curricular activity. It is considered a healthy way to develop student's physical competence and confidence At fanarah language pre-school, students have access to excellent sports facilities including :",
  //     points: "four separate areas * Sunny natural area. * nOutside safety kids area. * Covered inside safety kids area Theater * Separate Montessori and media room. * Extra separate area designed to accommodate art and craft facilities",
  //     heading3: "SAFETY",
  //     description3: "Our security system allows us to monitor the building and oversee entry and exit to from our school. Emergency preparedness plans in all the school premises. Fire alarm system in all the school premises",
  //     updated_at: "2024-02-01T12:29:47.000000Z"
  //   },

  //   {
  //     id: 2,
  //     image: "assets/image/schools/details.jpg",
  //     main_heading: "Kindergarten Department",
  //     main_description: "The Kindergarten Department campus is designed and built according to the highest international standards with a land area of 1050 square meters. It comprises of 4 classes. The classrooms are designed to receive 14 student Complete sound system for all the pre- school building. Classrooms environment is safe, colorful, nurturing and engaging. All classrooms are equipped with air conditioners ,have networked computers with internet access and interactive smart board. Huge area 45 meters square for each , giving each student his needed free movement.",
  //     heading2: "PLAYGROUNDS AND ACTIVITY ROOMS",
  //     description2: "Physical education is a major area of extra-curricular activity. It is considered a healthy way to develop student's physical competence and confidence At fanarah language pre-school, students have access to excellent sports facilities including :",
  //     points: "four separate areas * Sunny natural area. * nOutside safety kids area. * Covered inside safety kids area Theater * Separate Montessori and media room. * Extra separate area designed to accommodate art and craft facilities",
  //     heading3: "SAFETY",
  //     description3: "Our security system allows us to monitor the building and oversee entry and exit to from our school. Emergency preparedness plans in all the school premises. Fire alarm system in all the school premises",
  //     updated_at: "2024-05-01T12:29:47.000000Z"
  //   },


  //   {
  //     id: 3,
  //     image: "assets/image/schools/details.jpg",
  //     main_heading: "Primary Department",
  //     main_description: "The Primary Department campus is designed and built according to the highest international standards with a land area of 1050 square meters. It comprises of 4 classes. The classrooms are designed to receive 14 student Complete sound system for all the pre- school building. Classrooms environment is safe, colorful, nurturing and engaging. All classrooms are equipped with air conditioners ,have networked computers with internet access and interactive smart board. Huge area 45 meters square for each , giving each student his needed free movement.",
  //     heading2: "PLAYGROUNDS AND ACTIVITY ROOMS",
  //     description2: "Physical education is a major area of extra-curricular activity. It is considered a healthy way to develop student's physical competence and confidence At fanarah language pre-school, students have access to excellent sports facilities including :",
  //     points: "four separate areas * Sunny natural area. * nOutside safety kids area. * Covered inside safety kids area Theater * Separate Montessori and media room. * Extra separate area designed to accommodate art and craft facilities",
  //     heading3: "SAFETY",
  //     description3: "Our security system allows us to monitor the building and oversee entry and exit to from our school. Emergency preparedness plans in all the school premises. Fire alarm system in all the school premises",
  //     updated_at: "2024-06-01T12:29:47.000000Z"
  //   },


  //   {
  //     id: 4,
  //     image: "assets/image/schools/details.jpg",
  //     main_heading: "Preparatory And Secondary Department",
  //     main_description: "The Preparatory And Secondary Department campus is designed and built according to the highest international standards with a land area of 1050 square meters. It comprises of 4 classes. The classrooms are designed to receive 14 student Complete sound system for all the pre- school building. Classrooms environment is safe, colorful, nurturing and engaging. All classrooms are equipped with air conditioners ,have networked computers with internet access and interactive smart board. Huge area 45 meters square for each , giving each student his needed free movement.",
  //     heading2: "PLAYGROUNDS AND ACTIVITY ROOMS",
  //     description2: "Physical education is a major area of extra-curricular activity. It is considered a healthy way to develop student's physical competence and confidence At fanarah language pre-school, students have access to excellent sports facilities including :",
  //     points: "four separate areas * Sunny natural area. * nOutside safety kids area. * Covered inside safety kids area Theater * Separate Montessori and media room. * Extra separate area designed to accommodate art and craft facilities",
  //     heading3: "SAFETY",
  //     description3: "Our security system allows us to monitor the building and oversee entry and exit to from our school. Emergency preparedness plans in all the school premises. Fire alarm system in all the school premises",
  //     updated_at: "2024-09-01T12:29:47.000000Z"
  //   }

  // ]
  unsubscribe: Subject<any> = new Subject();
  dataSchool?: any;
  data?:any;
  dataLink?:any;
  points?:any[];
  points2?:any[];

  constructor(@Inject(DOCUMENT) private documents: any, private route: ActivatedRoute, private router: Router, private sharedService: SharedService){
    this.route.params.subscribe((params: any) => {
      this.activeProductId = params['id'];

      this.sharedService.getSchoolCampusDetails(this.activeProductId).pipe(takeUntil(this.unsubscribe)).subscribe({
        next: (data) => {
          this.dataSchool = data.data;
          this.points=this.dataSchool.points.split('@');
          this.points2=this.dataSchool.points2.split('@');
        },
      });
    });
  }

  ngOnInit(): void {
    // this.route.params.subscribe((params: any) => {
    //   this.activeProductId = params['id'];
    //   if (this.activeProductId !== undefined && this.activeProductId !== null) {
    //     this.filteredItems = this.itemsData.filter(item => item.id === parseInt(this.activeProductId));
    //   } else {
    //     this.filteredItems = [];
    //   }
    // });
    this.sharedService.getSchoolCampus().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.data = data.data;
      },
    });
    this.sharedService.getLinksSocialMedia().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data) => {
        this.dataLink = data.data;
        // console.log(this.dataLink);

      },
    });

    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
