import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  check:EventEmitter<boolean> = new EventEmitter();
  url:string ='https://jsonplaceholder.typicode.com/todos' 
  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get(this.url);
  }
 
}
