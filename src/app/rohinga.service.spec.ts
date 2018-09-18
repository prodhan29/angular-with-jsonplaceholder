import { TestBed } from '@angular/core/testing';

import { RohingaService } from './rohinga.service';

describe('RohingaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RohingaService = TestBed.get(RohingaService);
    expect(service).toBeTruthy();
  });
});
