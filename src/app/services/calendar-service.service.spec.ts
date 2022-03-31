import { TestBed } from '@angular/core/testing';

import { CalendarServiceService } from './calendar-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

const todayDate:Date = new Date; 

let disabledDated: CalendarServiceService;

describe('CalendarServiceService', () => {
  let service: CalendarServiceService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    });
    service = TestBed.inject(CalendarServiceService);
    http =  TestBed.inject(HttpClient);
    httpController =  TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check whether the dates are blocked after 14 days', () => {
    expect(todayDate.toLocaleDateString()).toBe('3/31/2022');
    // let blockedDate = disabledDated.getDaysInCurrentMonth(todayDate);
    // expect(blockedDate).toContain(todayDate.toLocaleDateString());
  });

});
