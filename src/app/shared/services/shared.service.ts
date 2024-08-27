import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  spinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }
  url = 'https://dashboard.fanarah.net/api/';
  lang = sessionStorage.getItem('lang') ?? 'en';

  headers = new HttpHeaders()
    .set('X-localization', sessionStorage.getItem('lang') ?? 'en')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    .set('Permissions-Policy', 'geolocation=(self "https://dashboard.fanarah.net/api/")');

  getIsLoading(): Observable<boolean> {
    return this.spinner
  }

  setIsLoading(loading: boolean | any) {
    this.spinner.next(loading);
  }


  // home page
  getFlags(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`assets/flags.json`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getHomeheader(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/header`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getCvheader(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}career/cv-header`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getCareerheader(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}career/career-header`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getPositionheader(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}career/position-header`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getCareerlist(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}career/career`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getJobDetail(id?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}career/job/${id}`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  cvSend(body?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.post(`${this.url}form/cv`,body, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getFeatureInfomation(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/features-info`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getEducatingChildren(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/educating`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getPrograms(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/programs`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getStatistics(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/statistics`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getaboutus(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/about-us`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getHouses(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/houses`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getAgePrograms(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/age-programs`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getGalleryEvents(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/gallery`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getComments(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/comments`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getTeachers(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/teachers`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getGuideAbout2(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/guide`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }


  // about us page
  getWhoWeAre(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}about/why`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getOurService(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}about/services`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }


  // Schools page
  getSchoolCampus(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}school-campus`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getSchoolCampusDetails(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}school-campus/${param}`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }


  // Event Gallery page
  getEventGallery(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}activity-gallery`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  getEventGalleryDetails(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}school-campus/${param}`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }

  //Contact us
  getContactUs(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/contact-us`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
  contactUs(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.post<any>(`${this.url}form/contact-us`, param, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }

 //Online admission
 OnlineAdmission(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.post<any>(`${this.url}form/online-admission`, param, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }

  // Global
  getLinksSocialMedia(param?: any): Observable<any> {
    this.setIsLoading(true);
    return this.http.get(`${this.url}home/social-media`, { headers: this.headers }).pipe(tap(() => { this.setIsLoading(false); }));
  }
}
