import { Component, OnInit } from '@angular/core';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(private recruiterService:RecruiterService) { }

  ngOnInit(): void {
  }

  onCheck(event:any){
   this.recruiterService.check.emit(event.target.checked);

  }
}