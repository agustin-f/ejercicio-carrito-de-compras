import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ModalService } from '../../services/servicio-prueba';

@Component({
  standalone: true,
  selector: 'app-listado-de-compras',
  imports: [],
  templateUrl: './listado-de-compras.html',
  styleUrl: './listado-de-compras.css',
})
export class ListadoDeCompras {
  private cartService = inject(CartService);
  private modalService = inject(ModalService);

  productos = this.cartService.cart;

  total = computed(() => this.cartService.cart().reduce((acc, p) => acc + p.precio, 0));

  confirmarCompra() {
    this.modalService.abrir({
      titulo: 'Compra exitosa',
      mensaje: 'Gracias por tu compra 🎉',
    });

    this.cartService.clear();
  }
}
