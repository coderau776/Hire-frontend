import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AfterLoginComponent implements OnInit {

  user:SocialUser=new SocialUser();
  loggedIn:boolean=false;
  constructor(private authService:SocialAuthService) { 
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user=user;
      this.loggedIn=(user!=null);
    })
  }

}
