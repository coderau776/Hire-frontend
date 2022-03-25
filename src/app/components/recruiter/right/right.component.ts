import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service';
import { RecruiterService } from 'src/app/services/recruiter.service';


@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  todos:any;
  page:number=1;
  cnt:number=0;
  tbSize:number =10;
  
  constructor(private paginService:PaginationService,private recruiterService:RecruiterService) { }

  check:boolean;
  ngOnInit(): void {
    this.postList()
    this.recruiterService.check.subscribe((check)=>{
      this.check=check;
    })
  }

  postList():void{
    this.paginService.getAll().subscribe((res)=>{
      this.todos = res;
      console.log(this.todos);
    })
  }

  onDataChange(event:any){
    this.page = event;
    this.postList();

  }


}
