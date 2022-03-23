import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
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
    // this.http.post(this.url,{email:user.email,post:"Interviewer"}).subscribe((data)=>{
    //   console.log(this.getPost());
    // })
    this.loggedIn=(user!=null);
  }

  getUser():SocialUser{
    return this.user;
  }

  getPost():string{
    console.log(this.url+"/"+this.user.email)

    this.http.get<User>(this.url+"/"+this.user.email).subscribe((user:User)=>{
      console.log(user);
    })
    return "";
  }




}
