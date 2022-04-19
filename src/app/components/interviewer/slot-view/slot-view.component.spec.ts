import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SlotViewComponent } from './slot-view.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';

describe('SlotViewComponent', () => {
  let component: SlotViewComponent;
  let fixture: ComponentFixture<SlotViewComponent>;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotViewComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotViewComponent);
    component = fixture.componentInstance;
    http =  TestBed.inject(HttpClient);
    httpController =  TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
