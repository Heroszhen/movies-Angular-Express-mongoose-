import { TestBed } from '@angular/core/testing';

import { MyapiService } from './myapi.service';

describe('MyapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyapiService = TestBed.get(MyapiService);
    expect(service).toBeTruthy();
  });
});
