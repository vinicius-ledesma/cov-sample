import { TestBed } from '@angular/core/testing';

import { AnotherCommunicationService } from './another-communication.service';

describe('AnotherCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotherCommunicationService = TestBed.get(AnotherCommunicationService);
    expect(service).toBeTruthy();
  });
});
