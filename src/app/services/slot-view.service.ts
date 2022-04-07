import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slot } from '../models/Slot';

@Injectable({
  providedIn: 'root',
})
export class SlotViewService {
  private url_slot: string =
    'http://test-env.eba-p9gye2ye.us-east-1.elasticbeanstalk.com/slots/';
  slots: Slot[];
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}

  getSlots() {
    return this.http.get<Slot[]>(this.url_slot + localStorage.getItem('id'));
  }

  setSlots(slots: Slot[]) {
    this.slots = slots;
  }


  provideSlot(start: string, end: string, date: string): Observable<any> {
    //validation remaiining

    const body = this.createSlot(start, end, date);
    return this.http.post(this.url_slot, body, { headers: this.headers });
  }
  createSlot(start: string, end: string, date: string) {

  provideInstantSlot(start:string,end:string,date:Date):Observable<any>{
    
    //validation remaiining
      var day = this.getFormattedDate(date);
      const body = this.createSlot(start,end,day);
      console.log("slot data"+body);
      return this.http.post(this.url_slot,body,{'headers':this.headers});

   
    
  }

  provideRecurSlot(startTime:string,endTime:string,startDate:Date,endDate:Date):Observable<any>{
      var sday = this.getFormattedDate(startDate);
      var eday = this.getFormattedDate(endDate);
      const body = this.createSlot(startTime,endTime,sday);
      console.log("slot data"+body);
      return this.http.post(this.url_slot+"/recur"+"/"+sday+"/"+eday+"/"+false,body,{'headers':this.headers});
      
      
  }

  provideRecurDaySlot(startTime:string,endTime:string,startDate:Date,endDate:Date,day:String){
    //var sday = this.getFormattedDate(startDate);
    var eday = this.getFormattedDate(endDate);

    var sday = this.getNearestDates(startDate,day);
    
    console.log(sday);
    const body = this.createSlot(startTime,endTime,sday);
    console.log("slot data"+body+this.url_slot+"/recur"+"/"+sday+"/"+eday+"/"+true,body,{'headers':this.headers});
    return this.http.post(this.url_slot+"/recur"+"/"+sday+"/"+eday+"/"+true,body,{'headers':this.headers});
  }
  

  getFormattedDate(date:Date){
    return (date.getMonth()<=9?"0"+(date.getMonth()+1):(date.getMonth()+1))+"-"+(date.getDate()<=9?"0"+date.getDate():date.getDate())+"-"+date.getFullYear();
  }

  createSlot(start: string, end: string,date: string) {

    var slot = new Slot();
    slot.date = date;
    slot.endTime = end;
    slot.startTime = start;
    slot.userId = Number(localStorage.getItem('id'));
    // available or unavailable
    slot.status = 'available';
    this.slots.push(slot);
    return JSON.stringify(slot);
  }

}

  getNearestDates(startDate: Date, day: String):string {
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log("func called")

    var index = startDate.getDay();
    var diff = 0;

    while(true){
      if(days[index]===day)
        break;
      index =(index%6) +1;
      console.log(index,days[index]===day,days[index],day);
      diff++;
      //  if(diff===4)
      //    break;
    }

    startDate.setDate(startDate.getDate()+diff);
     console.log("experiment dates"+this.getFormattedDate(startDate))
    return this.getFormattedDate(startDate);

    
    


  }
  
}




