import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftComponent } from './left.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('LeftComponent', () => {
  let component: LeftComponent;
  let fixture: ComponentFixture<LeftComponent>;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftComponent ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftComponent);
    component = fixture.componentInstance;
    http =  TestBed.inject(HttpClient);
    httpController =  TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
