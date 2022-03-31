import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Slot } from '../models/Slot';


@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  check:EventEmitter<boolean> = new EventEmitter();
  private url_slot:string = "http://test-env.eba-p9gye2ye.us-east-1.elasticbeanstalk.com/slots/" 
  constructor(private http:HttpClient) { }
  getData():Observable<Slot[]>{
    return this.http.get<Slot[]>(this.url_slot);
  }
 
}
