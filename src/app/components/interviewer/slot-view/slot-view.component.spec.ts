import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SlotViewComponent } from './slot-view.component';

describe('SlotViewComponent', () => {
  let component: SlotViewComponent;
  let fixture: ComponentFixture<SlotViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotViewComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
