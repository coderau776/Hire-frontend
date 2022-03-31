import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interviewer } from '../models/Interviewer';
import { Slot } from '../models/Slot';

@Injectable({
  providedIn: 'root'
})
export class PanelistService {

  private url_inter:string = "http://test-env.eba-p9gye2ye.us-east-1.elasticbeanstalk.com/interviewer/"
  private url_slot:string = "http://test-env.eba-p9gye2ye.us-east-1.elasticbeanstalk.com/slots/"
  interviewer:Interviewer;

  constructor(private http:HttpClient) { }

  getDetails(id:number):Observable<Interviewer>{
    console.log("get details")
     return this.http.get<Interviewer>(this.url_inter+id);
  }

  getTodaysSchedule(id:number):Observable<Slot[]>{
    console.log("get today sch")
    return this.http.get<Slot[]>(this.url_slot+id);
    
  }

  setInterviewer(person:Interviewer){
    this.interviewer = person;
  }

}
