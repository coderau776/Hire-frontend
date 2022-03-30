import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user')!);
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.user != null){
      this.router.navigate(['/pan']);
    }
  }

}
