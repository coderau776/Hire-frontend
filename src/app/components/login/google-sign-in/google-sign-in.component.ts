import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css'],
})
export class GoogleSignInComponent implements OnInit {

  
  constructor(private authService:SocialAuthService, private router:Router,private loginService:LoginService) { }
  


  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.loginService.setUser(user);
      console.log(user)
    })
  }

  signIn():void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user)=>{
      this.router.navigate(['/pan'])

      // console.log("post here"+this.loginService.getPost());
      // if(this.loginService.getPost()==="Interviewer"){
      //   this.router.navigate(['/interv'])
      // }
      // else if(this.loginService.getPost()==="Recruiter"){
      //   this.router.navigate(['/recr'])
      // }
        
    });
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

}
