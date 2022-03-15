import { Time } from "@angular/common";

export interface calendarDate{
    date:number,
    day:String,
    slots:{
        time:Time[],
        desc:string
    }[]

}