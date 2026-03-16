import { TestBed } from '@angular/core/testing';

import { ApiRestCountriesService } from './api-rest-countries.service';

describe('ApiRestCountriesService', () => {
  let service: ApiRestCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRestCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
