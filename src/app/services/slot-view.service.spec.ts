import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http'

import { SlotViewService } from './slot-view.service';

describe('SlotViewService', () => {
  let service: SlotViewService;
  let httpMock:HttpTestingController;
  let http:HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [SlotViewService]
    });
    service = TestBed.inject(SlotViewService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    
    expect(service).toBeTruthy();
  });
});
