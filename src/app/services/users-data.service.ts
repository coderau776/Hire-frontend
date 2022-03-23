import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  url = "https://mocki.io/v1/a9cdaccf-5c03-40e6-823d-4a5355114ed1"
  constructor(private http:HttpClient) { }
  users() 
  {
    return this.http.get(this.url)
  }
}
