import { TestBed } from '@angular/core/testing';

import { CalendarServiceService } from './calendar-service.service';

import { HttpClient } from '@angular/common/http';


const todayDate:Date = new Date; 

let disabledDated: CalendarServiceService;

describe('CalendarServiceService', () => {
  let service: CalendarServiceService;
  



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check whether the dates are blocked after 14 days', () => {
    expect(todayDate.toLocaleDateString()).toBe('4/18/2022');
    // let blockedDate = disabledDated.getDaysInCurrentMonth(todayDate);
    // expect(blockedDate).toContain(todayDate.toLocaleDateString());
  });

  it('should have getData function', () => {
    // const service: myService = TestBed.get(myService);
    expect(service.getDaysInCurrentMonth(new Date())).toEqual(30);
   });

});
