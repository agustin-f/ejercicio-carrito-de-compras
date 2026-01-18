import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart = signal<Product[]>([]);

  cart = this._cart.asReadonly();

  add(product: Product) {
    this._cart.update((current) => [...current, product]);
  }
}
