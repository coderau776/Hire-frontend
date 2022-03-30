import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
//import swal from 'SweetAlert';
@Component({
  selector: 'app-slot-view',
  templateUrl: './slot-view.component.html',
  styleUrls: ['./slot-view.component.css']
})
export class SlotViewComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user')!);
  faUser = faUser;
  faCal = faCalendar;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.user == null){
      this.router.navigate(['/']);
      alert( "Oops" + "Please Login to continue" +  "error" );
    }
    
  }
  navtopan():void{
    
    this.router.navigate(['/pan']);

}
navtointerv():void{
  this.router.navigate(['/interv']);
}
}
