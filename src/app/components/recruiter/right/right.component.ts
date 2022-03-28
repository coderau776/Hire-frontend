import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  displayedColumns =['id','title'];
  dataSource! : MatTableDataSource<any>;
  res!:any[];
  oriRes!:any[];

@ViewChild('paginator') paginator! :MatPaginator;

  constructor(private service:RecruiterService) { }

  ngOnInit(){
    this.service.getData().subscribe((Response:any[])=>{
      this.oriRes = Response;
      this.res = Response;
      this.dataSource=new MatTableDataSource(this.res)
      this.dataSource.paginator=this.paginator;
      
      
    })
    
    // this.service.check.subscribe((data)=>{
    //   if(data){
    //     this.res = this.res.filter((data)=>(data.id%29===0));
    //   }
    //   else{
    //     this.res = this.oriRes;
    //   }
    //   this.dataSource=new MatTableDataSource(this.res)
    //   this.dataSource.paginator=this.paginator;
    // })
    
  }

}
