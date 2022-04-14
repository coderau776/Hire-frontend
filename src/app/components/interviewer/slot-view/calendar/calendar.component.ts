import { Component, ElementRef, OnInit,QueryList,Renderer2,ViewChildren } from '@angular/core';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CalendarServiceService } from 'src/app/services/calendar-service.service';
import { SlotViewService } from 'src/app/services/slot-view.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {


  date:Date; 
  months:string[];
  dates:string[][];
  month:number=0;
  currentMonthDisable:number;
  nextMonthDisable:number; 
  faRight = faArrowRight;
  faLeft = faArrowLeft;
  target:any;


  @ViewChildren('d')
  ds:QueryList<ElementRef>;
  
  constructor(private renderer:Renderer2,private calendarService:CalendarServiceService,private slotvService:SlotViewService) { 
    this.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
  }

  ngAfterViewChecked(){
    console.log('ngafterviewchecked')
    this.setProvidedDates()
  }


  setProvidedDates(){
    
    this.slotvService.slots.forEach((slot)=>{
      
      let providedDate = new Date(slot.date);
      let index = providedDate.getMonth()-this.calendarService.currentMonth.getMonth();
      let option = index<0?(12-this.calendarService.currentMonth.getMonth())+providedDate.getMonth():index;
      
      if(this.month==option)
      {
        let offset = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay()-1;
        let i = offset+providedDate.getDate();
        //console.log(i,providedDate);
        this.ds.get(i)?.nativeElement.classList.add('provided');
        this.ds.get(i)?.nativeElement.classList.remove('disable');
      }
    })
  }

  dateClick(event:Event,date:string){

    
    this.calendarService.dateEvent.emit(new Date(this.date.getFullYear(),this.date.getMonth(),this.num(date)))
    this.target = event.target;
    
  }
  num(a:string){
    return Number(a);
  }
  
  onClick(add:number){
    this.month = (this.month+add)%3
    if(this.month==0){
      this.date = this.calendarService.currentMonth;
      this.dates = this.calendarService.currentMonthDates;
    }
    else if(this.month==1){
      this.date = this.calendarService.nextMonth;
      this.dates = this.calendarService.nextMonthDates;
    }
    else{
      this.date = this.calendarService.nextnextMonth;
      this.dates = this.calendarService.nextnextMonthDates;
    }

    console.log("clicked")
  }

  ngOnInit(): void {
    this.calendarService.initialize();
    this.date = this.calendarService.currentMonth;
    this.dates = this.calendarService.currentMonthDates;
    
    this.calculateDisable();
    
    this.calendarService.doneEvent.subscribe((date)=>{
      this.setProvidedDates();
      
      // this.renderer.addClass(this.target,'provided');
    })
    
  }
  calculateDisable(){
    this.currentMonthDisable=this.calendarService.currentMonth.getDate()+13;
    let daysInCurrentMonth = this.calendarService.getDaysInCurrentMonth(this.calendarService.currentMonth);
    this.nextMonthDisable = this.currentMonthDisable<=daysInCurrentMonth?0:this.currentMonthDisable-daysInCurrentMonth;
  }


  
  
  
}
