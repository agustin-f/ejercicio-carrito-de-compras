import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Chatinputs } from './components/chatinputs/chatinputs';
import { BannerHome } from './components/banner-home/banner-home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Chatinputs, BannerHome],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('carrito-de-compras');

  constructor() {}
}
