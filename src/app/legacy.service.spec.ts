import { TestBed } from '@angular/core/testing';

import { LegacyService } from './legacy.service';

describe('LegacyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LegacyService = TestBed.get(LegacyService);
    expect(service).toBeTruthy();
  });
});
