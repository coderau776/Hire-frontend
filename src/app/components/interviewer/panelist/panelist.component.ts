import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { LoginService } from 'src/app/services/login.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-panelist',
  templateUrl: './panelist.component.html',
  styleUrls: ['./panelist.component.css']
})
export class PanelistComponent implements OnInit {

  users:string[]; 
  faEdit = faEdit;
  log:SocialUser;
  
  constructor(private loginService:LoginService) {
    // userData.users().subscribe((data) => {
    //   console.warn("data", data);
    //   this.users = data;
    // });

    this.log = this.loginService.getUser();

  }

  ngOnInit(): void {
    this.users=["10:00","12:00"];
  }
  signOut(){
    console.log("humne koshish ki thi")
  }

}
