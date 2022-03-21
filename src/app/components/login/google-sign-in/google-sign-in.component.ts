import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css'],
})
export class GoogleSignInComponent implements OnInit {

  user:SocialUser;
  loggedIn:boolean;
  constructor(private authService:SocialAuthService, private router:Router) { }
  


  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user=user;
      this.loggedIn=(user!=null);
      console.log(user)
    })
  }

  signIn():void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user)=>{
      this.router.navigate(['/al'])
    });
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

}
