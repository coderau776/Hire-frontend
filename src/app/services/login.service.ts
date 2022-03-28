import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user:SocialUser;
  post:string;
  loggedIn:boolean=false;
  private url:string = "http://localhost:9090/emp"
  constructor(private http:HttpClient) { }

  setUser(user:SocialUser){
    this.user = user;
    localStorage.setItem('user',user.name);
    // this.http.post(this.url,{email:user.email,post:"Interviewer"}).subscribe((data)=>{
    //   console.log(this.getPost());
    // })
    this.loggedIn=(user!=null);
  }

  getUser():SocialUser{
    return this.user;
  }

  getPost():Observable<User>{
    console.log(this.url+"/"+this.user.email)

    return this.http.get<User>(this.url+"/"+this.user.email);
    
  }




}
