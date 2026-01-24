import { Injectable, signal, effect } from '@angular/core';
import { Product } from '../models/product.model';

const STORAGE_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart = signal<Product[]>(this.loadCart());

  cart = this._cart.asReadonly();
  total: any;

  constructor() {
    // 🧠 se ejecuta automáticamente cada vez que cambia el cart
    effect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._cart()));
    });
  }

  add(product: Product) {
    this._cart.update((current) => [...current, product]);
  }

  clear() {
    this._cart.set([]);
  }

  remove(index: number) {
    this._cart.update((current) => current.filter((_, i) => i !== index));
  }

  // 🔒 solo el servicio sabe leer storage
  private loadCart(): Product[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }
}
