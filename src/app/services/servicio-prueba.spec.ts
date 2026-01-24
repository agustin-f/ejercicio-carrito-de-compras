import { TestBed } from '@angular/core/testing';

import { ServicioPrueba } from './servicio-prueba';

describe('ServicioPrueba', () => {
  let service: ServicioPrueba;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPrueba);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
