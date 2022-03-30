import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: SocialUser;
  post: string;
  loggedIn: boolean = false;
  private url: string = 'http://localhost:8080/users/user';

  constructor(private http: HttpClient) {}

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

  getPost(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
      }),
    };
    const _user = this.http.get<User>(
      `${this.url}/${this.user.email}`,
      httpOptions
    );
    console.log(_user);
    return _user;
  }
}
