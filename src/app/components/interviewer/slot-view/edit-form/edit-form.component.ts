import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CalendarServiceService } from 'src/app/services/calendar-service.service'; 


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  Date1 : Date;
  flag1 = false;
  flag2 = false;
  flag3 = false;
  
  @ViewChild('st')
  st:ElementRef;
  @ViewChild('et')
  et:ElementRef;


  constructor(private calendarService:CalendarServiceService) { }

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

  showmsg(){
    this.flag3 = true;

  }

  getvalues(val: any){
    val = {...val,"recurring":this.flag1,"weekly":this.flag2}
    this.calendarService.doneEvent.emit(this.Date1.getDay());
    this.st.nativeElement.value="";
    this.et.nativeElement.value="";
    console.log(val);

  }

  

  

}
