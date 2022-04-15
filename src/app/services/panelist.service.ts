import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interviewer } from '../models/Interviewer';
import { Slot } from '../models/Slot';

@Injectable({
  providedIn: 'root',
})
export class PanelistService {
  private url_inter: string =
    'http://ec2-13-232-164-153.ap-south-1.compute.amazonaws.com:8080/interviewer/';
  private url_slot: string =
    'http://ec2-13-232-164-153.ap-south-1.compute.amazonaws.com:8080/slots/';
  interviewer: Interviewer;

  constructor(private http: HttpClient) {}

  getDetails(id: number): Observable<Interviewer> {
    console.log('get details');
    return this.http.get<Interviewer>(this.url_inter + id);
  }

  getTodaysSchedule(id: number): Observable<Slot[]> {
    console.log('get today sch');
    return this.http.get<Slot[]>(this.url_slot + id);
  }

  setInterviewer(person: Interviewer) {
    this.interviewer = person;
  }

  getFormattedDate(date: Date) {
    return (
      (date.getMonth() <= 9
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      '-' +
      (date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()) +
      '-' +
      date.getFullYear()
    );
  }
}
