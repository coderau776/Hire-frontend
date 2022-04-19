import { TestBed } from '@angular/core/testing';

import { PanelistService } from './panelist.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { HttpClient } from '@angular/common/http';

describe('PanelistService', () => {
  let service: PanelistService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(PanelistService);
    http =  TestBed.inject(HttpClient);
    httpController =  TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
