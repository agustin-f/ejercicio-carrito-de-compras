import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeCompras } from './listado-de-compras';

describe('ListadoDeCompras', () => {
  let component: ListadoDeCompras;
  let fixture: ComponentFixture<ListadoDeCompras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoDeCompras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoDeCompras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
