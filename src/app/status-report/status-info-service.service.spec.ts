import { TestBed } from '@angular/core/testing';

import { StatusInfoServiceService } from './status-info-service.service';

describe('StatusInfoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusInfoServiceService = TestBed.get(StatusInfoServiceService);
    expect(service).toBeTruthy();
  });
});
