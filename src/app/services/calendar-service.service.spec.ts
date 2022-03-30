import { TestBed } from '@angular/core/testing';

import { CalendarServiceService } from './calendar-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';

describe('CalendarServiceService', () => {
  let service: CalendarServiceService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CalendarServiceService);
    http =  TestBed.inject(HttpClient);
    httpController =  TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
