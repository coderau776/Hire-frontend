import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  user:SocialUser;
  post:string;
  loggedIn:boolean=false;
  private url:string = "http://localhost:9292/users/2"
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };

  constructor(private http:HttpClient) { }

  setUser(user:SocialUser){
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    
    // this.http.post(this.url,{email:user.email,post:"Interviewer"}).subscribe((data)=>{
    //   console.log(this.getPost());
    // })
    this.loggedIn=(user!=null);
  }

  getUser():SocialUser{
    return this.user;
  }

  getPost():Observable<User>{

    return this.http.get<User>(this.url);
    
  }




}
