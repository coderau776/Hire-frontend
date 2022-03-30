import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterComponent } from './recruiter.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';

describe('RecruiterComponent', () => {
  let component: RecruiterComponent;
  let fixture: ComponentFixture<RecruiterComponent>;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterComponent);
    component = fixture.componentInstance;
    http =  TestBed.inject(HttpClient);
    httpController =  TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
