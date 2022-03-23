import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelistComponent } from './panelist.component';

describe('PanelistComponent', () => {
  let component: PanelistComponent;
  let fixture: ComponentFixture<PanelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
