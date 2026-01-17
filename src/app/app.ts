import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product.model';
import { ProductCard } from './components/product-card/product-card';
import { CartPage } from './pages/cart-page/cart-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('carrito-de-compras');

  constructor() {}
}
