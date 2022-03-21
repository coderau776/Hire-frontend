import { AfterViewInit, Component, ElementRef, OnInit,QueryList,Renderer2,ViewChild,ViewChildren,ViewEncapsulation } from '@angular/core';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit,AfterViewInit {

  currentMonth:Date;
  currentMonthDates:string[][];
  date:Date;
  nextMonth:Date;
  nextnextMonth:Date; 
  months:string[];
  dates:string[][];
  nextMonthDates:string[][];
  nextnextMonthDates:string[][];
  month:number=0;
  currentMonthDisable:number;
  nextMonthDisable:number; 
  faRight = faArrowRight;
  faLeft = faArrowLeft;
  provided:string[];

  // @ViewChild('table')
  // table:ElementRef;

  @ViewChildren('d')
  ds:QueryList<ElementRef>;
  
  constructor(private renderer:Renderer2) { 
    //this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    this.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
  }
  ngAfterViewInit() {
      console.log('ngafterviewinit')
  }
  ngAfterViewChecked(){
    console.log('ngafterviewchecked')
    this.setProvidedDates()
  }


  initialize(){
    this.currentMonth = new Date();
    this.nextMonth = new Date(this.currentMonth.getFullYear(),this.currentMonth.getMonth()+1,1);
    this.nextnextMonth = new Date(this.currentMonth.getFullYear(),this.currentMonth.getMonth()+2,1);
    this.currentMonthDates = this.getDatesArray(this.currentMonthDates,this.currentMonth);
    this.nextMonthDates = this.getDatesArray(this.nextMonthDates,this.nextMonth);
    this.nextnextMonthDates = this.getDatesArray(this.nextnextMonthDates,this.nextnextMonth);
    this.date = this.currentMonth;
    this.dates = this.currentMonthDates;
  }

  setProvidedDates(){
    
    this.provided.forEach((date)=>{
      let providedDate = new Date(date);
      let index = providedDate.getMonth()-this.currentMonth.getMonth();
      let option = index<0?(12-this.currentMonth.getMonth())+providedDate.getMonth():index;
      
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

  dateClick(event:Event){
    this.renderer.addClass(event.target,'provided');
  }
  num(a:string){
    return Number(a);
  }
  getDatesArray(dates:string[][],date:Date):string[][] {
    
    let length = this.getDaysInCurrentMonth(date)
    let offset =new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 6 - new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    let inc=1;
    dates=[];
    console.log(length,this.months[date.getMonth()],length+offset,(length+offset)/7)
    A:for(let i=0;i < length+offset/7;i++)
    {
      dates.push([]);
      for(let j=0;j<7;j++)
      { 
        if(i==0 && j<this.getFirstDay(date))
        {
          dates[i].push("");
          continue;
        }
        dates[i].push(inc+"");   
        
        inc++;
        if(inc>length)
          break A;
      }
    }
    return dates;
  }

  onClick(add:number){
    this.month = (this.month+add)%3
    if(this.month==0){
      this.date = this.currentMonth;
      this.dates = this.currentMonthDates;
    }
    else if(this.month==1){
      this.date = this.nextMonth;
      this.dates = this.nextMonthDates;
    }
    else{
      this.date = this.nextnextMonth;
      this.dates = this.nextnextMonthDates;
    }

    console.log("clicked")
  }

  ngOnInit(): void {
    this.initialize();
    this.currentMonthDisable=this.currentMonth.getDate()+13;
    let daysInCurrentMonth = this.getDaysInCurrentMonth(this.currentMonth);
    this.nextMonthDisable = this.currentMonthDisable<=daysInCurrentMonth?0:this.currentMonthDisable-daysInCurrentMonth;
    //format month-date-year
    this.provided = ['03-22-2022','03-31-2022','04-01-2022','04-06-2022'];
  }

  getDaysInCurrentMonth(date:Date) {
    return new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
  }
  getFirstDay(date:Date){
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.getDay();
  }
  
  
  
}
