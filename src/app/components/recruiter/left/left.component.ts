import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private recruiterService:RecruiterService) { }

  ngOnInit(): void {
  }

  check(event:any){
    if(event.target.checked){
      this.recruiterService.check.emit(true);
    }
    else{
      this.recruiterService.check.emit(false);
    }
  }

}
