import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css'],
})
export class RecruiterComponent implements OnInit {
  rounds;
  skills;
  dateRange;

  constructor(private loginService: LoginService) {
    console.log(this.loginService.getUser());
  }

  ngOnInit(): void {}

  getRounds(val: any) {
    this.rounds = val;
  }

  getSkills(val: any) {
    this.skills = val;
  }

  getDateRange(val: any) {
    this.dateRange = val;
  }
}
