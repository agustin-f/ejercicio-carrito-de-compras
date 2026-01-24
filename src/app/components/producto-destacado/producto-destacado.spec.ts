import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDestacado } from './producto-destacado';

describe('ProductoDestacado', () => {
  let component: ProductoDestacado;
  let fixture: ComponentFixture<ProductoDestacado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoDestacado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoDestacado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
