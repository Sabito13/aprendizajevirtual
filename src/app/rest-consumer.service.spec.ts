import { TestBed } from '@angular/core/testing';

import { RestConsumerService } from './rest-consumer.service';

describe('RestConsumerService', () => {
  let service: RestConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
