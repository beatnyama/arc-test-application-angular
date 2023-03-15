import { TestBed } from '@angular/core/testing';

import { AreaCalculationServiceService } from './area-calculation-service.service';

describe('AreaCalculationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaCalculationServiceService = TestBed.get(AreaCalculationServiceService);
    expect(service).toBeTruthy();
  });
});
