import { TestBed } from '@angular/core/testing';

import { ListDriversService } from './list-drivers.service';

describe('ListDriversService', () => {
  let service: ListDriversService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDriversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
