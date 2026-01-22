import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { CartPage } from './pages/cart-page/cart-page';
import { Chatinputs } from './components/chatinputs/chatinputs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartPage, Navbar, Chatinputs],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('carrito-de-compras');

  constructor() {}
}
