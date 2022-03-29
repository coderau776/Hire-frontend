import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { LoginService } from 'src/app/services/login.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { faArrowRight, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import swal from 'SweetAlert';

@Component({
  selector: 'app-panelist',
  templateUrl: './panelist.component.html',
  styleUrls: ['./panelist.component.css']
})
export class PanelistComponent implements OnInit {

  users:string[];
  
  user = JSON.parse(localStorage.getItem('user')!);
  // user1 = JSON.parse(this.user)
  faUser = faUser;
  faEdit = faEdit;
  faRight = faArrowRight;
  faCal = faCalendar;
  log:SocialUser;
  
  constructor(private loginService:LoginService,private router:Router) {
    // userData.users().subscribe((data) => {
    //   console.warn("data", data);
    //   this.users = data;
    // });

    this.log = this.loginService.getUser();
    //console.log(this.log.photoUrl);
  }

  navtopan():void{
    
      this.router.navigate(['/pan']);
  
  }
  navtointerv():void{
    this.router.navigate(['/interv']);
  }

  ngOnInit(): void {
    this.users=["10:00","12:00"];
    if(this.user == null){
      this.router.navigate(['/']);
    }
    swal ( "Oops" ,  "Please Login to continue" ,  "error" )
    // alert("Please login to continue");
   
  }
  signOut(){
    this.router.navigate(['/']);
    localStorage.removeItem('user');
  }
  manage(){
    this.router.navigate(['/interv']);
  }
}
