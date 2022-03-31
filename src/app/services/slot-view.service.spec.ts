import { TestBed } from '@angular/core/testing';

import { SlotViewService } from './slot-view.service';

describe('SlotViewService', () => {
  let service: SlotViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
