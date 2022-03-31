import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';

const todayDate:Date = new Date; 

let disabledDated: CalendarComponent;

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    http =  TestBed.inject(HttpClient);
    httpController =  TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should show current date', () => {

  // })

  // it('should check ondate selected event', () => {
  //   const date = new Date(31/3/2022);
  //   component.onDateSelected(date);
  //   fixture.detectChanges();
  //   expect(component.details.get('contractStartDate').value.toString()).toEqual(date);
  // });

  // it('should check whether the dates are blocked after 14 days', () => {
  //   expect(todayDate.toLocaleDateString()).toBe('3/31/2022');
  //   let blockedDate = disabledDated.calculateDisable();
  //   expect(blockedDate).not.toContain(todayDate.toLocaleDateString());
  // });

});
