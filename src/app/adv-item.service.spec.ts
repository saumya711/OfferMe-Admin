import { TestBed } from '@angular/core/testing';

import { AdvItemService } from './adv-item.service';

describe('AdvItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvItemService = TestBed.get(AdvItemService);
    expect(service).toBeTruthy();
  });
});
