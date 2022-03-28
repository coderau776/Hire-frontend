import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { LoginService } from 'src/app/services/login.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panelist',
  templateUrl: './panelist.component.html',
  styleUrls: ['./panelist.component.css']
})
export class PanelistComponent implements OnInit {

  users:string[]; 
  user_name = localStorage.getItem('user');
  faUser = faUser;
  faEdit = faEdit;
  faRight = faArrowRight;
  log:SocialUser;
  
  constructor(private loginService:LoginService,private router:Router) {
    // userData.users().subscribe((data) => {
    //   console.warn("data", data);
    //   this.users = data;
    // });

    this.log = this.loginService.getUser();
    //console.log(this.log.photoUrl);
  }

  ngOnInit(): void {
    this.users=["10:00","12:00"];
  }
  signOut(){
    console.log("humne koshish ki thi")
  }
  manage(){
    this.router.navigate(['/interv']);
  }
}
