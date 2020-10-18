import { TestBed } from '@angular/core/testing';

import { AeDynamicFormService } from './ae-dynamic-form.service';

describe('AeDynamicFormService', () => {
  let service: AeDynamicFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeDynamicFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
