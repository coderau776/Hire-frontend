import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Email } from '../models/Email';
import { Slot } from '../models/Slot';

@Injectable({
  providedIn: 'root',
})
export class RecruiterService {
  check: EventEmitter<boolean> = new EventEmitter();

  private url: string =
    'http://test-env.eba-p9gye2ye.us-east-1.elasticbeanstalk.com';

  private emailURL: string = 'http://localhost:8080/send-email';

  constructor(private http: HttpClient) {}
  getData(): Observable<Slot[]> {
    return this.http.get<Slot[]>(`${this.url}/slots`);
  }

  applyFilter(): Observable<any> {
    return of('Observer called');
  }

  //this method is reponsible for posting the request to Email controller in Spring boot to send the email
  sendEmail(message: Email): Observable<any> {
    console.log(JSON.stringify(message));

    return this.http.post<Email>(this.emailURL, JSON.stringify(message), {
      headers: { 'content-type': 'application/json' },
    });
  }

  //this method is responsible for updating the slot status
  updateStatus(status): Observable<any> {
    return this.http.put<any>(`${this.url}/status`, JSON.stringify(status), {
      headers: { 'content-type': 'application/json' },
    });
  }
}
