import { TestBed } from '@angular/core/testing';

import { PaisPersonalService } from './pais-personal.service';

describe('PaisPersonalService', () => {
  let service: PaisPersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisPersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
