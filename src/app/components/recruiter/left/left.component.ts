import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms';
import { RecruiterService } from 'src/app/services/recruiter.service';


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
 
   Rounds: FormGroup;
   skills: FormGroup;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

   //constructor(private recruiterService:RecruiterService) { }
  constructor(fb: FormBuilder,private recruiterService:RecruiterService) {
    this.Rounds = fb.group({
      round1: false,
      round2: false,
      round3: false,
      hr: false,
    });
    this.skills = fb.group({
      angular: false,
      java: false,
      devops: false,
      spring: false,
    });

  }

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
