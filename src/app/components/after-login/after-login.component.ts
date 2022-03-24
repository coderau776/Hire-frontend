import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AfterLoginComponent implements OnInit {

  user:SocialUser;
  loggedIn:boolean=false;
  constructor(private authService:SocialAuthService,private loginService:LoginService) { 
  }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }

}
