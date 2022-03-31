import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
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
  constructor(private router:Router,private slotvService:SlotViewService) { }

  ngOnInit(): void {
    if(this.user == null){
      this.router.navigate(['/']);
      swal( "Oops" , "Please Login to continue" ,  "error" );
    }

    this.slotvService.getSlots().subscribe((slots)=>{
      this.slotvService.setSlots(slots);
      console.log(slots)
    })
  }
  navtopan():void{
    
    this.router.navigate(['/pan']);

}
navtointerv():void{
  this.router.navigate(['/interv']);
}
}
