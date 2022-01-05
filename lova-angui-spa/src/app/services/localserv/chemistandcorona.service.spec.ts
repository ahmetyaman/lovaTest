import { TestBed } from '@angular/core/testing';

import { ChemistandcoronaService } from './chemistandcorona.service';

describe('ChemistandcoronaService', () => {
  let service: ChemistandcoronaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChemistandcoronaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
