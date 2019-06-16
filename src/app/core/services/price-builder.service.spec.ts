import { TestBed } from '@angular/core/testing';

import { PriceBuilderService } from './price-builder.service';

describe('PriceBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceBuilderService = TestBed.get(PriceBuilderService);
    expect(service).toBeTruthy();
  });
});
