import { TestBed } from '@angular/core/testing';

import { TubeFoundationService } from './tube-foundation.service';

describe('TubeFoundationService', () => {
  let service: TubeFoundationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TubeFoundationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
