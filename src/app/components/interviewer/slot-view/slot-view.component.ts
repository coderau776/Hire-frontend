import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SlotViewService } from 'src/app/services/slot-view.service';
import swal from 'sweetAlert';
@Component({
  selector: 'app-slot-view',
  templateUrl: './slot-view.component.html',
  styleUrls: ['./slot-view.component.css']
})
export class SlotViewComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user')!);
  faUser = faUser;
  faCal = faCalendar;
  constructor(private router:Router,private slotvService:SlotViewService,private ngx:NgxUiLoaderService) { }

  ngOnInit(): void {
    if(this.user == null){
      this.router.navigate(['/']);
      swal( "Oops" , "Please Login to continue" ,  "error" );
    }
    // this.ngx.start(); // start foreground spinner of the master loader with 'default' taskId
    // // Stop the foreground loading after 5s
    // setTimeout(() => {
    //   this.ngx.stop(); // stop foreground spinner of the master loader with 'default' taskId
    // }, 3000);

    
  }
  navtopan():void{
    
    this.router.navigate(['/pan']);

}
navtointerv():void{
  this.router.navigate(['/interv']);
}
}
