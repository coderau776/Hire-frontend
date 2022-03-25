import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"filter"})
export class Filter implements PipeTransform{
   
    tmp:any[];
    transform(value: any[], ...args: any[]):any[] {
       this.tmp=[]
        if(args[0])
        {   
             this.tmp.push(value.filter((data)=>(data.id%5===0)));
             console.log(this.tmp);
             //return this.tmp;
            return value.filter((data)=>(data.id%5===0));
            // console.log(args[0],tmp)
            //this.tmp.push(this.tmp.filter((data)=>{data.round==="Round 1"}));
        }
        return value;
        // if(args[1])
        // {
        //     this.tmp.push(this.tmp.filter((data)=>{data.round==="Round 2"}));
        // }
        // if(args[2])
        // {
        //     this.tmp.push(this.tmp.filter((data)=>{data.round==="Round 3"}));
        // }
        // if(args[3])
        // {
        //     this.tmp.push(this.tmp.filter((data)=>{data.round==="HR"}));
        // }
        // if(args[4])
        // {
        //     this.tmp.push(this.tmp.filter((data)=>{data.skill==="Angular"}));
        // }
        // if(args[5])
        // {
        //     this.tmp.push(this.tmp.filter((data)=>{data.skill==="Java"}));
        // }
        // if(args[6])
        // {
        //     this.tmp.push(this.tmp.filter((data)=>{data.skill==="Devops"}));
        // }
        // if(args[7])
        // {
        //     this.tmp.push(this.tmp.filter((data)=>{data.skill==="Spring"}));
        // }
      
    }

}