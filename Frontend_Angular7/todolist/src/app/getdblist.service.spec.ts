import { TestBed } from '@angular/core/testing';

import { GetdblistService } from './getdblist.service';

describe('GetdblistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetdblistService = TestBed.get(GetdblistService);
    expect(service).toBeTruthy();
  });
});
