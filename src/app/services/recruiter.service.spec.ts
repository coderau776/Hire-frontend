import { TestBed } from '@angular/core/testing';

import { RecruiterService } from './recruiter.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';

describe('RecruiterService', () => {
  let service: RecruiterService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(RecruiterService);
    http =  TestBed.inject(HttpClient);
    httpController =  TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
