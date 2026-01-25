import { Routes } from '@angular/router';
import { CartPage } from './pages/cart-page/cart-page';
import { ProductosDestacados } from './pages/productos-destacados/productos-destacados';
import { ListadoDeCompras } from './pages/listado-de-compras/listado-de-compras';
import { authGuard } from './AuthGuard';
import { LoginPage } from './pages/login-page/login-page';
import { ContactoPage } from './pages/contacto-page/contacto-page';

export const routes: Routes = [
  { path: '', component: CartPage },
  { path: 'destacados', component: ProductosDestacados },
  { path: 'contacto', component: ContactoPage, canActivate: [authGuard] },
  { path: 'carrito', component: ListadoDeCompras },
  { path: 'login', component: LoginPage },
  { path: '**', redirectTo: '' },
];
