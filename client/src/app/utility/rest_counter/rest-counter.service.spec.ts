import { TestBed } from '@angular/core/testing';

import { RestCounterService } from './rest-counter.service';

describe('RestCounterService', () => {
  let service: RestCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
