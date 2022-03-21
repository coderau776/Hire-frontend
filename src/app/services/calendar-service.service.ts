import { Injectable } from '@angular/core';
import { calendarDate } from '../models/calendarDate.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarServiceService {

  currentMonth:Date;
  currentMonthDates:string[][];
  nextMonth:Date;
  nextnextMonth:Date;
  nextMonthDates:string[][];
  nextnextMonthDates:string[][];   
  provided:string[];

  constructor() {   

  }

  getDatesArray(dates:string[][],date:Date):string[][] {
    
    let length = this.getDaysInCurrentMonth(date)
    let offset =new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 6 - new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    let inc=1;
    dates=[];
    //console.log(length,this.months[date.getMonth()],length+offset,(length+offset)/7)
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
  initialize(){
    this.currentMonth = new Date();
    this.nextMonth = new Date(this.currentMonth.getFullYear(),this.currentMonth.getMonth()+1,1);
    this.nextnextMonth = new Date(this.currentMonth.getFullYear(),this.currentMonth.getMonth()+2,1);
    this.currentMonthDates = this.getDatesArray(this.currentMonthDates,this.currentMonth);
    this.nextMonthDates = this.getDatesArray(this.nextMonthDates,this.nextMonth);
    this.nextnextMonthDates = this.getDatesArray(this.nextnextMonthDates,this.nextnextMonth);
    this.provided = ['03-22-2022','03-31-2022','04-01-2022','04-06-2022'];
    
  }




}
