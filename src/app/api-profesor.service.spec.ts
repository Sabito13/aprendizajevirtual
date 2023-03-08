import { TestBed } from '@angular/core/testing';

import { ApiProfesorService } from './api-profesor.service';

describe('ApiProfesorService', () => {
  let service: ApiProfesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
