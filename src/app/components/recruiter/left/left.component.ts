import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
})
export class LeftComponent implements OnInit {
  dummy: String;

  Rounds: FormGroup;
  skills: FormGroup;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  @Output() public roundEmitter = new EventEmitter();
  @Output() public skillEmitter = new EventEmitter();
  @Output() public dateEmitter = new EventEmitter();

  //constructor(private recruiterService:RecruiterService) { }
  constructor(fb: FormBuilder, private recruiterService: RecruiterService) {
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
      react: false,
    });

    this.range = fb.group({
      start: null,
      end: null,
    });
  }

  ngOnInit(): void {
    this.recruiterService.applyFilter().subscribe({
      next: (data) => (this.dummy = data),
    });
  }

  check(event: any) {
    if (event.target.checked) {
      this.recruiterService.check.emit(true);
    } else {
      this.recruiterService.check.emit(false);
    }
  }

  onRoundChange() {
    this.roundEmitter.emit(this.Rounds.value);
  }

  onSkillChange() {
    this.skillEmitter.emit(this.skills.value);
  }

  onDateChange() {
    let val = {
      start: new Date(this.range.value.start),
      end: new Date(this.range.value.end),
    };
    console.log(val);

    this.dateEmitter.emit(val);
  }

  clearDateField() {
    this.range.reset();
    this.onDateChange();
  }
}
