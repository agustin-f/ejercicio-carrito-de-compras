import { Routes } from '@angular/router';
import { CartPage } from './pages/cart-page/cart-page';
import { CartSummary } from './components/cart-summary/cart-summary';
import { ProductosDestacados } from './pages/productos-destacados/productos-destacados';

export const routes: Routes = [
  { path: '', component: CartPage },
  { path: 'destacados', component: ProductosDestacados },
  { path: 'contacto', component: CartSummary },
  { path: '**', redirectTo: '' },
];
