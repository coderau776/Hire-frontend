import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  date:Date;
  days:string[]; 
  months:string[];
  dates:number[][];
  length:number;
  constructor() { 
    this.date = new Date();
    this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    this.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    this.length= this.getDaysInCurrentMonth()
    let inc=1;
    this.dates = [[]]
    // for(let i=0;i < this.length/7;i++)
    // {
    //   for(let j=0;j<7;j++)
    //   {
    //     this.dates[i][j] = inc;  
    //     inc++;
    //   }
    // }
  }

  ngOnInit(): void {
  }

  getDaysInCurrentMonth() {
    return new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDate();
  }
  
  
  
}
