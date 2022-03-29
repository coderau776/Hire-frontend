import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-slot-view',
  templateUrl: './slot-view.component.html',
  styleUrls: ['./slot-view.component.css']
})
export class SlotViewComponent implements OnInit {
  faUser = faUser;
  faCal = faCalendar;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navtopan():void{
    
    this.router.navigate(['/pan']);

}
navtointerv():void{
  this.router.navigate(['/interv']);
}
}
