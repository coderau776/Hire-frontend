import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css'],
})
export class GoogleSignInComponent implements OnInit {
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.loginService.setUser(user);
      console.log(user);
    });
  }

  signIn(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      //localStorage.setItem('id',1+"");
      //this.router.navigate(['/pan'])
      console.log('Sign done now in then');

      this.loginService.getPost().subscribe((user: User) => {
        console.log('users post in service ' + user.userRole);
        localStorage.setItem('id', user.userID + '');

        console.log(user.userRole);

        if (user.userRole === 'Interviewer') {
          this.router.navigate(['/pan']);
        } else if (user.userRole === 'Recruiter') {
          this.router.navigate(['/recr']);
        }
      });
    });
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
