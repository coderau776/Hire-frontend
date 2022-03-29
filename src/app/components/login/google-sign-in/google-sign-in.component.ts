import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
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
      // this.router.navigate(['/pan']);
      // console.log(user);
      this.loginService.getPost().subscribe((user) => {
        console.log('users userRole in service ' + user.userRole);
        if (user.userRole === 'Interviewer') {
          this.router.navigate(['/pan']);
        } else if (user.userRole === 'Recrcuiter') {
          this.router.navigate(['/recr']);
        }
      });
    });
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
