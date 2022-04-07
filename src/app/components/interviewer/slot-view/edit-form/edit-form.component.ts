import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { CalendarServiceService } from 'src/app/services/calendar-service.service'; 
import { NgForm } from '@angular/forms';
import { SlotViewService } from 'src/app/services/slot-view.service';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  Date1 : Date;
  flag1 = false;
  flag2 = false;
  //flag3 = false;
    range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  
  @ViewChild('st')
  st:ElementRef;
  @ViewChild('et')
  et:ElementRef;


  constructor(private calendarService:CalendarServiceService,private slotvService:SlotViewService) { }

  ngOnInit(): void {
    this.Date1=this.calendarService.currentMonth;
    this.calendarService.dateEvent.subscribe((date)=>{
      this.Date1=date;
    })
  }

  instant(){
    this.flag1= false;
  }

  recurring(){
    this.flag1= true;
  }

  daily(){
    this.flag2= false;
  }

  weekly(){
    this.flag2= true;
  }

  // showmsg(){
  //   this.flag3 = true;

  // }

  getvalues(val: any){
    val = {...val,"recurring":this.flag1,"weekly":this.flag2}
    this.calendarService.doneEvent.emit(this.Date1.getDay());
    this.st.nativeElement.value="";
    this.et.nativeElement.value="";
    console.log(val);
    // console.log(this.slotvService.getNearestDates(new Date(val.startDate),val.day));
    if(val.recurring)
    {
      if(val.weekly){
           this.slotvService.provideRecurDaySlot(val.startTime,val.endTime,new Date(val.startDate),new Date(val.endDate),val.day).subscribe((res)=>{
         this.slotvService.getSlots().subscribe((slots)=>{
           this.slotvService.setSlots(slots);
         });
       })
      console.log('in weekly');
      }
      else{
      
      this.slotvService.provideRecurSlot(val.startTime,val.endTime,new Date(val.startDate),new Date(val.endDate)).subscribe((res)=>{
        console.log("recur day "+res);
        this.slotvService.getSlots().subscribe((slots)=>{
          this.slotvService.setSlots(slots);
        });
      })
      console.log('in recur')
      }
      
    }
    else{
      console.log("inside else")
      this.slotvService.provideInstantSlot(val.startTime,val.endTime,this.Date1).subscribe((res)=>{
        console.log(res);
      });
    }
    this.flag1=false;
  }

  

  

}
