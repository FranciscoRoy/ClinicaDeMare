import { TestBed } from '@angular/core/testing';

import { paletaColorService } from './paleta-color.service';

describe('paletaColorService', () => {
  let service: paletaColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(paletaColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
