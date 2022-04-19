import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';

describe('LoginService', () => {
  let service: LoginService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(LoginService);
    http =  TestBed.inject(HttpClient);
    httpController =  TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    // const service: myService = TestBed.get(myService);
    expect(service.setUser).toBeTruthy();
   });
});
