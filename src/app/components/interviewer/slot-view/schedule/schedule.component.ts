
import { Component, OnInit } from '@angular/core';
import { Slot } from 'src/app/models/Slot';
import { CalendarServiceService } from 'src/app/services/calendar-service.service';
import { SlotViewService } from 'src/app/services/slot-view.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  selecteddate!: Date ;
  events= [{"id":1,"Dates":new Date(2022,3,24),"Time":"8:00 AM",task:"Java interview"},
  {"id":2,"Date":new Date(2022,2,22),"Time":"10:00 AM",task:"Angular interview"},
  {"id":3,"Date":new Date(2022,3,24),"Time":"6:00 PM",task:"React interview"},
  {"id":4,"Date":new Date(2022,3,26),"Time":"8:00 AM",task:"java interview"},
  {"id":5,"Date":new Date(2022,3,26),"Time":"10:00 AM",task:"Python interview"},
  {"id":6,"Date":new Date(2022,3,27),"Time":"8:00 AM",task:"Linux interview"},
  {"id":7,"Date":new Date(2022,3,28),"Time":"8:00 AM",task:"Java interview"},
  {"id":8,"Date":new Date(2022,3,29),"Time":"8:00 AM",task:"SQL interview"},
  {"id":9,"Date":new Date(2022,3,29),"Time":"11:00 AM",task:"Nodejs interview"},
  {"id":10,"Date":new Date(2022,3,30),"Time":"9:00 AM",task:"Hibernate interview"}]

  slots:Slot[];

  constructor(private calendarService:CalendarServiceService,private slotvService:SlotViewService){

  }
  
  ngOnInit(): void {   
    this.calendarService.initialize(); 
    this.selecteddate=this.calendarService.currentMonth;

    this.slots = this.slotvService.slots;

    this.calendarService.dateEvent.subscribe((date: Date)=>{
      this.selecteddate=date;
    })
  }
 
 


 
  
  
}
