import { TestBed } from '@angular/core/testing';

import { AddusersService } from './addusers.service';

describe('AddusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddusersService = TestBed.get(AddusersService);
    expect(service).toBeTruthy();
  });
});
