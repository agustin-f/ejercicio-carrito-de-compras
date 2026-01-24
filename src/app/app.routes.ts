import { Routes } from '@angular/router';
import { CartPage } from './pages/cart-page/cart-page';
import { CartSummary } from './components/cart-summary/cart-summary';
import { ProductosDestacados } from './pages/productos-destacados/productos-destacados';
import { ListadoDeCompras } from './pages/listado-de-compras/listado-de-compras';

export const routes: Routes = [
  { path: '', component: CartPage },
  { path: 'destacados', component: ProductosDestacados },
  { path: 'contacto', component: CartSummary },
  { path: 'carrito', component: ListadoDeCompras },
  { path: '**', redirectTo: '' },
];
