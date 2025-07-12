import { TestBed } from '@angular/core/testing';

import { EndPoint } from './end-point';

describe('EndPoint', () => {
  let service: EndPoint;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndPoint);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
