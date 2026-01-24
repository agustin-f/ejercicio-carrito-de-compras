import { Routes } from '@angular/router';
import { CartPage } from './pages/cart-page/cart-page';
import { CartSummary } from './components/cart-summary/cart-summary';
import { ProductosDestacados } from './pages/productos-destacados/productos-destacados';
import { ListadoDeCompras } from './pages/listado-de-compras/listado-de-compras';
import { LoginComponent } from './components/login-component/login-component';
import { authGuard } from './AuthGuard';

export const routes: Routes = [
  { path: '', component: CartPage, canActivate: [authGuard] },
  { path: 'destacados', component: ProductosDestacados, canActivate: [authGuard] },
  { path: 'contacto', component: CartSummary },
  { path: 'carrito', component: ListadoDeCompras, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];
