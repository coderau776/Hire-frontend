import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http'

import { SlotViewService } from './slot-view.service';


describe('SlotViewService', () => {
  let service: SlotViewService;

  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(SlotViewService);
    http =  TestBed.inject(HttpClient);
    httpController =  TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    
    expect(service).toBeTruthy();
  });
});
