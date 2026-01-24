import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ModalService } from '../../services/servicio-prueba';

@Component({
  selector: 'app-checkout-page',
  imports: [],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {
  constructor(
    public cartService: CartService,
    private modalService: ModalService,
  ) {}

  confirmarCompra() {
    this.modalService.abrir({
      titulo: 'Compra exitosa',
      mensaje: 'Gracias por tu compra 🎉',
    });

    this.cartService.clear();
  }
}
