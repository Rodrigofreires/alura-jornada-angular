import { TestBed } from '@angular/core/testing';

import { PromocaoService } from './promocao.service';

describe('PrmocaoService', () => {
  let service: PromocaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromocaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
