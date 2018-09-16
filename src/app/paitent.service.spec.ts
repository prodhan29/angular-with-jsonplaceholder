import { TestBed, inject } from '@angular/core/testing';

import { PaitentService } from './paitent.service';

describe('PaitentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaitentService]
    });
  });

  it('should be created', inject([PaitentService], (service: PaitentService) => {
    expect(service).toBeTruthy();
  }));
});
