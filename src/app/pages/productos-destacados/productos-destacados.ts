import { Component } from '@angular/core';
import { PRODUCTS } from '../../mockups/producto-destacado.mockup';
import { CarritoDeCompras } from '../../components/carrito-de-compras/carrito-de-compras';
import { ProductoDestacado } from '../../components/producto-destacado/producto-destacado';

@Component({
  selector: 'app-productos-destacados',
  imports: [ProductoDestacado, CarritoDeCompras],
  templateUrl: './productos-destacados.html',
  styleUrl: './productos-destacados.css',
})
export class ProductosDestacados {
  public products = PRODUCTS;
}
