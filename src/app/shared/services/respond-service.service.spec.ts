import { TestBed } from '@angular/core/testing';

import { RespondService } from './respond-service.service';

describe('RespondServiceService', () => {
  let service: RespondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
