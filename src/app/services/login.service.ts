import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  user:SocialUser;
  post:string;
  loggedIn:boolean=false;
  private url:string = "http://test-env.eba-p9gye2ye.us-east-1.elasticbeanstalk.com/users/"
  

  constructor(private http:HttpClient) { }

  setUser(user: SocialUser) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    // console.log(user.email);

    // this.http.post(this.url,{email:user.email,post:"Interviewer"}).subscribe((data)=>{
    //   console.log(this.getPost());
    // })
    this.loggedIn = user != null;
  }

  getUser(): SocialUser {
    return this.user;
  }

  getPost():Observable<User>{

    return this.http.get<User>(this.url+"user"+"/"+this.user.email);
    //return this.http.get<User>(this.url+"1");
    
  }
}
