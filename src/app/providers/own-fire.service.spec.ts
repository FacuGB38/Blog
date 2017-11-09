import { TestBed, inject } from '@angular/core/testing';

import { OwnFireService } from './own-fire.service';

describe('OwnFireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnFireService]
    });
  });

  it('should be created', inject([OwnFireService], (service: OwnFireService) => {
    expect(service).toBeTruthy();
  }));
});
