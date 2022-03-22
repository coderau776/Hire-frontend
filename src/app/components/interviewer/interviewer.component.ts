import { Component, OnInit } from '@angular/core';
import { CalendarServiceService } from 'src/app/services/calendar-service.service';

@Component({
  selector: 'app-interviewer',
  templateUrl: './interviewer.component.html',
  styleUrls: ['./interviewer.component.css']
})
export class InterviewerComponent implements OnInit {

  constructor(private cs:CalendarServiceService) { }

  ngOnInit(): void {
    
  }

}
