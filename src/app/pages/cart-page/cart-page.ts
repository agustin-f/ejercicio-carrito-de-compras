import { Component } from '@angular/core';
import { PRODUCTS } from '../../mockups/product.mockup';
import { ProductCard } from "../../components/product-card/product-card";
import { CarritoDeCompras } from "../../components/carrito-de-compras/carrito-de-compras";

@Component({
  selector: 'app-cart-page',
  imports: [ProductCard, CarritoDeCompras],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
  public productList = PRODUCTS;

  
}
