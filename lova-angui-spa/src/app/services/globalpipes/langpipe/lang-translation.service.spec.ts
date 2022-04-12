import { TestBed } from '@angular/core/testing';

import { LangTranslationService } from './lang-translation.service';

describe('LangTranslationService', () => {
  let service: LangTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
