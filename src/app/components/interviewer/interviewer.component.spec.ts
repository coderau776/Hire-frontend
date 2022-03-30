import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerComponent } from './interviewer.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';

describe('InterviewerComponent', () => {
  let component: InterviewerComponent;
  let fixture: ComponentFixture<InterviewerComponent>;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerComponent);
    component = fixture.componentInstance;
    http =  TestBed.inject(HttpClient);
    httpController =  TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
