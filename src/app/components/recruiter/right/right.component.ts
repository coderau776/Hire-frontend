import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  displayedColumns =['id','Date','Time'];
  dataSource! : MatTableDataSource<any>;

@ViewChild('paginator') paginator! :MatPaginator;

  constructor(private service:UsersDataService) { }

  ngOnInit(){
    this.service.users().subscribe((Response:any)=>{
      this.dataSource=new MatTableDataSource(Response)
      this.dataSource.paginator=this.paginator;
      console.log('response is ',Response);
      
    })
  }

}
