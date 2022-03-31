import { TestBed } from '@angular/core/testing';

import { PanelistService } from './panelist.service';

describe('PanelistService', () => {
  let service: PanelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
