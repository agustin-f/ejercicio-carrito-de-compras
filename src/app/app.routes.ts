import { Routes } from '@angular/router';
import { CartPage } from './pages/cart-page/cart-page';
import { ProductCard } from './components/product-card/product-card';

export const routes: Routes = [
  { path: '/', component: ProductCard },
  { path: 'productos', component: ProductCard },
  { path: '**', redirectTo: 'productos' },
];
