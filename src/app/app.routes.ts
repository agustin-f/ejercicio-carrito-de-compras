import { Routes } from '@angular/router';
import { ProductCard } from './components/product-card/product-card';
import { BannerHome } from './components/banner-home/banner-home';
import { CartPage } from './pages/cart-page/cart-page';
import { CartSummary } from './components/cart-summary/cart-summary';

export const routes: Routes = [
  { path: '', component: CartPage },
  { path: 'productos', component: CartSummary },
  { path: '**', redirectTo: '' },
];
