import { TestBed } from '@angular/core/testing';

import { NgSmartFormService } from './ng-smart-form.service';

describe('NgSmartFormService', () => {
  let service: NgSmartFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSmartFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
