import { Component, computed, input } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-carrito-de-compras',
  imports: [],
  templateUrl: './carrito-de-compras.html',
  styleUrl: './carrito-de-compras.css',
})
export class CarritoDeCompras {


  constructor(private cartService: CartService){
    
  }

  totalItems = computed(() => this.cartService.cart().length);
}
